import Link from "next/link";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Stack, Text } from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch, BsArrowRight } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import logoRealEstate from "../assets/images/Logo RealEstate.svg";

export const NavLinkList = ({ hrefTo, linkText, linkIcon, bgColor, bodyColor, textColor }) => (
	<Link href={hrefTo} passHref>
		<Flex
			alignItems="center"
			// fontSize="2xl"
			px="3"
			py="1"
			mx="2"
			cursor="pointer"
			color={bodyColor}
			bg={bgColor}
			borderTopRightRadius={linkText == "Work with us" && "13"}
		>
			<Text color={textColor} fontSize="sm">
				{linkText}
			</Text>
			{linkIcon}
		</Flex>
	</Link>
);

const Navbar = () => (
	<div style={{ position: "relative", width: "80% !important" }}>
		<Flex
			p="2"
			borderBottom="1px"
			borderColor="gray.100"
			as="header"
			position="fixed"
			w="100%"
			top="0"
			left="0"
			zIndex={200}
			backgroundColor="rgba(39, 26, 0, 0.8)"
			backdropFilter="saturate(180%) blur(5px)"
			alignItems="center"
		>
			<Box fontSize="3xl" cursor="pointer">
				<Link href="/" paddingLeft="2" passHref>
					<Flex>
						<Image src={logoRealEstate} alt="logo" />
					</Flex>
				</Link>
			</Box>
			<Spacer />
			<Box mx={6}>
				<Stack spacing={8} direction="row">
					<NavLinkList hrefTo="/search" linkText="Search" bgColor="" bodyColor="white" textColor />
					<NavLinkList
						hrefTo="/search?purpose=for-sale"
						linkText="Buy Property"
						bgColor=""
						bodyColor="white"
						textColor
					/>
					<NavLinkList
						hrefTo="/search?purpose=for-rent"
						linkText="Rent Property"
						bgColor=""
						bodyColor="white"
						textColor
					/>
					<NavLinkList
						hrefTo="/"
						linkText="Work with us"
						bgColor="gold"
						bodyColor="white"
						textColor="black"
						linkIcon={<BsArrowRight />}
					/>
				</Stack>
			</Box>
			<Box>
				<Menu>
					<MenuButton as={IconButton} icon={<FcMenu />} variant="outline" color="red.400" />
					<MenuList>
						<Link href="/" passHref>
							<MenuItem icon={<FcHome />}>Home</MenuItem>
						</Link>
						<Link href="/search" passHref>
							<MenuItem icon={<BsSearch />}>Search</MenuItem>
						</Link>
						<Link href="/search?purpose=for-sale" passHref>
							<MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
						</Link>
						<Link href="/search?purpose=for-rent" passHref>
							<MenuItem icon={<FiKey />}>Rent Property</MenuItem>
						</Link>
					</MenuList>
				</Menu>
			</Box>
		</Flex>
	</div>
);

export default Navbar;
