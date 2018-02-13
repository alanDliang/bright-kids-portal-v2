// react
import React from 'react';
// react-router
import {
	BrowserRouter as Router, 
	Route,
	Switch,
	Link
} from "react-router-dom";
// components
import Jumbotron from '../Jumbotron'
//assets
import FaArrowCircleORight from 'react-icons/lib/fa/arrow-circle-o-right'
import './ListStudents.css'

// utils
import API from '../../utils/APIstudents'

// const dynamicRedirect = ({ match }) => {
// 	return <Route to"" render=/>
// }

//assets
const style = {
	jumbotron: {
		background: "#fedc60"
	}
}

const arrowSize = 50;

class ListStudents extends React.Component {
	
	state = {
		students: [],
	}

	//when component mounts, load student data
	componentDidMount() {
		this.loadStudents();
	}

	//load student data from database
	loadStudents = () => {
		API.getAllStudents()
			.then(res => {
					// console.log(res.data)
					this.setState({
						students: res.data
					})
					console.log(this.state)
					// console.log(this.state.students[0].id)
				}
			)
			.catch(err => console.log(err));
	};


	render() {

		return (
			
			<div>

				<Jumbotron 
					display="Students In Your Family"
					style={style.jumbotron}
				/>

				<div className="container" id="mainContainer">
					<div className="row">
						<div className="col-lg-12">
							<div>
				        {/* If there are students loaded to the state */}
								{this.state.students.length ? (
				          <div className="studentsDiv">
				          	{/* Go through every student in family and render a div*/}
				            {this.state.students.map(student => (
				              <div className="studentRow">
				              	<div>
					                <h2 key={student.id} className="studentName">{student.student_first} {student.student_last} </h2>
						              <h4 className="studentView"> View Student Profile <Link to={"/view_family/" + student.id}><FaArrowCircleORight size={arrowSize} className="fontAwe" /></Link></h4>
					              </div>
				              </div>
				            ))}
				          </div>
				        ) : (
				              <h3>No students to display. Please register for services.</h3>
				            )}
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default ListStudents; 