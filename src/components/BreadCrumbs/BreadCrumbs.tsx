import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

interface BreadCrumbsProps {
	links: Array<string>;
	routes: Array<string>;
}

export default function BreadCrumbs({ links, routes }: BreadCrumbsProps) {
	const navigate = useNavigate();

	const handleClick = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		route: string
	) => {
		event.preventDefault();
		return navigate(route);
	};
	const breadcrumbs = [
		...links.map((link, index) => {
			if (links.length - 1 !== index) {
				return (
					<Link
						underline='hover'
						key='1'
						color='#6355D8FF'
						href={`/${routes[index]}`}
						onClick={(e) => handleClick(e, routes[index])}
					>
						{link}
					</Link>
				);
			} else {
				return (
					<Typography key='3' color='#171A1FFF'>
						<span style={{ textDecoration: 'none' }}>{link}</span>
					</Typography>
				);
			}
		}),
	];

	return (
		<Stack spacing={2}>
			<Breadcrumbs separator='›' aria-label='breadcrumb'>
				{breadcrumbs}
			</Breadcrumbs>
		</Stack>
	);
}
