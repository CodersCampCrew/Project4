import { Container, Stack } from "react-bootstrap";

const Layout = ({ children }: any) => {
	return (
		<Container>
			<Stack className='col-md-8 col-xl-6 mx-auto'>{children}</Stack>
		</Container>
	);
};

export default Layout;
