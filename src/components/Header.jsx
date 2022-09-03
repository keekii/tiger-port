import React from 'react';
import styled from 'styled-components';

function Header() {
	return (
		<Navbar className="navbar navbar-expand-lg navbar-light bg-white">
			<Container className="container-fluid">
				<a className="navbar-brand" href="#">
					<h3>Tiger</h3>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<Nav className="collapse navbar-collapse" id="navbarNav">
					<List className="navbar-nav">
						<Item className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								About
							</a>
							<BottomLine className="nav-bottom-line" />
						</Item>
						<Item className="nav-item">
							<a className="nav-link" href="#">
								Work
							</a>
							<BottomLine className="nav-bottom-line" />
						</Item>
						<Item className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
							<BottomLine className="nav-bottom-line" />
						</Item>
					</List>
				</Nav>
			</Container>
		</Navbar>
	);
}

const Navbar = styled.nav`
	padding: 1.5rem 3rem 1rem 3rem;
`;

const Container = styled.div`
	padding-left: 0;
	padding-right: 0;
`;

const Nav = styled.div`
	justify-content: end;
`;

const List = styled.ul`
	@media (min-width: 992px) {
		.nav-link {
			padding-right: 1.5rem !important;
			padding-left: 1.5rem !important;
		}
	}
`;

const Item = styled.li`
	position: relative;

	&:hover {
		.nav-bottom-line {
			display: block;
		}
	}
`;

const BottomLine = styled.div`
	@media (min-width: 992px) {
		display: none;
		position: absolute;
		top: 80%;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 50px;
		height: 3px;
		background-color: #010101;
	}
`;

export default Header;
