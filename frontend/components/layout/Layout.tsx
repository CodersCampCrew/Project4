import { Container, Stack } from "react-bootstrap";
import MainNavigation from './MainNavigation'

const Layout = ({ children }: any) => {
	return (
		<>
			<MainNavigation/>
			<Container>
				<Stack className="col-md-8 col-xl-6 mx-auto">{children}</Stack>
			</Container>
		</>
	);
};

export default Layout;
