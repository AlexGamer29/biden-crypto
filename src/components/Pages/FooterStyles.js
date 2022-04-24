import styled from 'styled-components';

export const Box = styled.div`
padding: 40px 0px 40px 0px;
background: white;
position: relative;
bottom: 0;
border-top: 2.5px solid rgb(236, 239, 241);
width: 100%;


@media (max-width: 1000px) {
	padding: 50px 10px;
}

@media (max-width: 550px) {
	padding: 20px 10px;
}

`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(250px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(250px, 1fr));
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: #ffdd40;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
