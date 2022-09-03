import React from 'react';
import styled from 'styled-components';
import Hero1 from '../images/hero1.png';
import Hero2 from '../images/me.png';

function About() {
	return (
		<Container className="">
			<ContentContainer className=""></ContentContainer>
			<Content>
				<span>eTiger</span>
			</Content>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	margin-bottom: 3rem;
`;

const ContentContainer = styled.div`
	margin: 0 3rem;
	height: 500px;
	background-image: url(${Hero2});
	background-size: 600px;
	background-repeat: no-repeat;
	background-position: 100% 10px;
`;

const Content = styled.div`
	position: absolute;
	bottom: 0;
	left: 2%;

	span {
		font-size: 200px;
		font-weight: 600;
	}
`;

export default About;
