import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles.js";
import "../css/footer.css";

const Footer = () => {
    return (
        <Box>
            <h1>
                BidenCrypto - The Exchange for everyone
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="about">About</FooterLink>
                        <FooterLink href="terms">Terms</FooterLink>
                        <FooterLink href="#">Privacy</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Products</Heading>
                        <FooterLink href="#">Exchange</FooterLink>
                        <FooterLink href="#">Trust Wallet</FooterLink>
                        <FooterLink href="#">Gift Card</FooterLink>
                        <FooterLink href="#">Launchpad</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Submit a request</FooterLink>
                        <FooterLink href="#">Feedback</FooterLink>
                        <FooterLink href="#">Trading Rules</FooterLink>
                        <FooterLink href="#">Law Enforcement Requests</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
