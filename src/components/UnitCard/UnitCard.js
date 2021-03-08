/**
 * Created by Админ on 9/26/2020.
 */
/**
 * Created by Админ on 9/6/2020.
 *
 * Unit Card
 */
import React from "react";
import { render } from "react-dom";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import styled from "styled-jss";
/* import fontGlobal from '../AssetsGlobal/vt323.woff'; */

import bloodAngels from "../AssetsGlobal/40k-icons/src/svgs/blood-angels.svg";
import deathDread from "../AssetsGlobal/assets/death-company-dreadnout.jpg";

document.title = "CSS Manual TurboCharge";

const stlDefinition = createUseStyles({
	typographyMixin: {
		fontSize: ".75rem",
		fontStyle: "bold",
		fontWeight: "200",
		textTransform: "capitalize",
		fontVariant: "small-caps",
		textDecoration: "overline underline",
		letterSpacing: "-1px",
		wordSpacing: "2px",
		textIndent: "4em",
		color: "crimson",
		textAllign: "center",
	},
	clearfixit: {
		float: "right",
	},

	blackrage: {
		backgroundColor: "silver",
		padding: "15px",
		color: "black",
		border: "double 8px #FFA",
		textShadow: "-5px 5px 0px red, 5px -5px 0px teal",
		textAllign: "center",
	},
	triBorder: {
		"lineHeight": "75%",
		"width": "90%",
		"margin": "0 auto",
		"dislay": "block",
		"boxSizing": "border-box",
		"boxShadow":
			"-5px -5px 0px pink, 5px 5px 0px tomato, -5px 5px 0px red, 5px -5px 0px orange",
		"textDecoration": "none",
		"backgroundColor": "white",
		"border": "solid black 9px",
		"& p::first-letter": {
			fontSize: "40px",
			color: "gold",
		},
	},
	backImg: {
		backgroundImage: `url(${deathDread})`,
		backgroundRepeat: "no-repeat",
		backgroundOrigin: "content-box",
		border: "dashed red 3px",
	},

	secondary: {
		color: "white",
		border: "solid black 5px",
		width: "100%",
		height: "1200px",
		backgroundColor: "gray",
		boxShadow: "0 0 20px gold inset",
		boxSizing: "border-box",
	},
	main: {
		position: "sticky",
		top: "0",
		width: "100%",
		backgroundColor: "red",
	},
	subsection: {
		"position": "statc",
		"top": "0",

		"paddingLeft": "20px",
		"width": "100%",
		"height": "100px",
		"backgroundColor": "violet",
		"&:last-child": {
			color: "lime",
			marginTop: "40px",
			border: "1px solid black",
		},
	},
	secondStick: {
		position: "sticky",
		top: "0",
		height: "299px",
		width: "100%",
		backgroundColor: "lime",
	},

	animated: {
		width: "100px",
		height: "100px",
	},

	firstAnimation: {
		"backgroundColor": "lime",
		"&:hover": {
			opacity: "0",
			transition: "opacity 1s",
		},
	},
	secondAnimation: {
		"backgroundColor": "indigo",
		"&:hover": {
			transform: "skewX(35deg)",
			transition: "transform 1s",
		},
	},
	thirdAnimation: {
		"backgroundColor": "crimson",
		"&:hover": {
			height: "0px",
			transition: "height 1s",
		},
	},
	dropdown: {
		"color": "red",
		"border": "gold dashed 2px",
		"&:hover": {
			border: "solid red 19px",
		},
	},
});

function UnitCard() {
	const stlUnitCard = stlDefinition();

	const Container = styled("div")({
		backgroundColor: "silver",
	});

	const Green = styled("button")({
		padding: "5px",
		margin: "40px",
		backgroundColor: "green",
		fontWeight: 900,
		textDecoration: "underline",
		borderRadius: "61px",
	});

	const CustomOL = styled("ol")({
		"color": "orange",
		"border": "dashed 3px black",
		"& li": {
			textDecoration: "underline",
			marginLeft: "2em",
			fontSize: "0,9 rem",
			listStyleType: "none",
			listStylePosition: "inside",
			color: "black",

			backgroundImage: `url(${bloodAngels})`,
			backgroundPosition: "0 0",
			backgroundRepeat: "no-repeat",
			paddingLeft: "2em",
		},
	});

	const GridLine = styled("div")({
		border: "dashed 3px purple",
		backgroundColor: "silver",
		clear: "both",
		dislay: "block",
		overflow: "hidden",
		boxShadow: "0 0 15px 5px rgba(44,82,100, .75)",
		width: "100%",
		padding: "0",
		minWidth: "100%",
		maxWidth: "100%",
	});
	const GridCol = styled("div")({
		border: "solid 3px red",
		margin: "0 auto",
		float: "right",
		backgroundColor: "silver",
		dislay: "inline-block",
		maxWidth: "100%",
		minWidth: "10%",
		boxSizing: "border-box",
	});

	const CollapsingMargins = styled("div")({
		margin: "10px",
		backgroundColor: "gold",
		display: "inline-block",
		borderRadius: "0 20%/100%",
	});

	const Red = styled(Green)({
		backgroundColor: "white",
		color: "violet",
	});

	const ViText = styled("div")({
		fontSize: "1em",
	});

	const CoverBack = styled("div")({
		backgroundImage: `url(${deathDread})`,
		backgroundColor: "silver",
		backgroundBlendMode: "screen",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "local",

		backgroundOrigin: "border-box",
		backgroundClip: "content-box",
		backgroundPosition: "left center",
		backgroundSize: "50% auto",
		border: "dashed red 9px",
		padding: "20px",
		height: "500px",
		width: "400px",
	});

	const CoverbackShorthand = styled("div")({
		background: `url(${deathDread}) center center  no-repeat #FFF `,
		backgroundAttachment: "local",
		overflow: "scroll",

		width: "300px",
		height: "150px",
		border: "solid black 3px",
	});

	const ContainerAlligmentRow = styled("div")({
		dislay: "block",
		border: "dashed black 3px",
		padding: "15px",
		textAlign: "right",
		// clear:'both',
	});

	const ContainerAlligmentCell = styled("div")({
		dislay: "inline",
		border: "solid white 4px",
		backgroundColor: "violet",
		padding: "15px",
		width: "200px",
		margin: "0 auto",
		// float:'left'
	});

	const LeaderBoard = styled("div")({
		background:
			'url("https://via.placeholder.com/175x70")center bottom no-repeat',
	});

	const GradientS = styled("div")({
		backgroundImage:
			"repeating-linear-gradient(to right, purple 20px, orange 40px)",
		border: "solid orange 4px",
		padding: "14px",
	});

	const Gradient1 = styled("div")({
		backgroundImage:
			" repeating-linear-gradient(45deg, #900 20px, #FC0 30px, #900 40px)",
	});

	const GradientSharpStripes = styled("div")({
		backgroundImage:
			" repeating-linear-gradient(45deg, yellow 0, yellow 10px, black 10px, black 20px)",
	});

	const HexagonalGradient = styled("div")({
		backgroundImage: `linear-gradient(90deg, black 0, black 10px, transparent 10px, transparent 20px),
						 url(${deathDread})`,
	});

	const RadialGradient = styled("div")({
		backgroundImage:
			"radial-gradient(closest-corner circle at 20% 40%, transparent, yellowgreen)",
	});
	const RadialGradient2 = styled("div")({
		backgroundImage:
			" repeating-radial-gradient(circle, red 20px, orange 30px, yellow 40px, red 50px)",
	});

	const AccordionSection = styled("div")({
		padding: "30px",
		border: "dashed red 5px",
		margin: "15px",

		//margins coapsing here??
		//TODO need to figure out how margin collapsing works
	});
	const AnimatedDrop = styled("div")({
		border: "solid 1px lime",
	});

	const ForCV = styled("div")({
		backgroundColor: "tomato",
		border: "1px solid red",
	});

	class Astartes extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				squadName: this.props.squadName,
				squadMembers: this.props.squadMembers,
			};
			this.callsign = this.callsign.bind(this);
			this.bolter = this.bolter.bind(this);
		}

		callsign() {
			alert(this.state.squadName + " is ready!!!");
		}

		bolter() {
			console.log("TRTATATATA!!!");
		}

		render() {
			return (
				<div onMouseMove={this.bolter}>
					<h1>Squad {this.state.squadName}</h1>
					<h2>Current health {this.state.squadMembers}</h2>
					<button onClick={this.callsign}>check squad!</button>
				</div>
			);
		}
	}

	return (
		<Container>
			<ForCV>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Laborum, tempore.
			</ForCV>
			<Astartes squadName='Clonatium' squadMembers='10'>
				<p>-----ttt----</p>
				<h1>HHHHHHHHH</h1>
				<p>------ttt---</p>
			</Astartes>
			<AnimatedDrop>
				<div className={stlUnitCard.dropdown}>V</div>
				<div
					className={`
						${stlUnitCard.animated}
						${stlUnitCard.firstAnimation}
						`}
				></div>
				<div
					className={`
					${stlUnitCard.animated}
					${stlUnitCard.secondAnimation}
					`}
				></div>
				<div
					className={`
					${stlUnitCard.animated}
					${stlUnitCard.thirdAnimation}
				`}
				></div>
			</AnimatedDrop>

			<AccordionSection>
				<section className={stlUnitCard.secondary}>
					THIS IS SECONDARY SECTION
				</section>
				<section className={stlUnitCard.main}>
					THIS IS MAIN SECTION
					<div className={stlUnitCard.subsection}>
						<p>First CHILD subsection</p>
						<p>SECOND CHILD subsection </p>
					</div>
				</section>
				<section className={stlUnitCard.secondStick}></section>
				<section className={stlUnitCard.secondary}>
					THIS IS SECONDARY SECTION 2
				</section>
				Autem vero id consequatur. Quidem sit odit laudantium quibusdam
				odit est non recusandae occaecati. Eius reprehenderit explicabo
				maxime laudantium sed nemo. Fugiat earum dolore. Dignissimos
				rerum dolorem quibusdam. Quibusdam delectus reprehenderit ea
				aperiam. Adipisci eveniet quae praesentium earum est. Iusto odit
				et adipisci placeat illum in. Sit harum nam et nemo nemo quod
				autem vel. Eos dolorem aut quia. Debitis vel quisquam maiores
				laborum vero qui. Hic placeat repellat doloribus voluptatem.
				Modi molestiae nihil perspiciatis nihil minus cupiditate eos
				quis. Molestias perspiciatis ducimus porro non voluptatibus
				rerum consequatur sed sint. Perspiciatis deserunt vel et
				voluptas suscipit maxime.
			</AccordionSection>
			<RadialGradient2>
				iste-quia-sapiente iste-quia-sapiente iste-quia-sapiente
				iste-quia-sapiente iste-quia-sapiente iste-quia-sapiente
				iste-quia-sapiente iste-quia-sapiente iste-quia-sapiente
				iste-quia-sapiente iste-quia-sapiente iste-quia-sapiente
			</RadialGradient2>

			<RadialGradient>
				Vitae facere facilis atque aut optio laborum neque. Odit ea
				velit et ut ut totam saepe. Vel cum incidunt omnis esse error.
				Animi ratione porro aperiam dolor consequuntur est quia velit
				veniam. Eaque facere cupiditate.
			</RadialGradient>
			<HexagonalGradient>
				fdsfsdfsd FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
				SSSSSSSSSSSSSSSSSSSSSSS
			</HexagonalGradient>
			<GradientSharpStripes>dasfasfasfas</GradientSharpStripes>
			<Gradient1>sdgsdgsgsgsd</Gradient1>

			<GradientS>ghghghghh 12231313</GradientS>

			<LeaderBoard>
				<h1>This is leaderboard</h1>
				<ul>
					<li>ww</li>
					<li>www</li>
					<li>width</li>
				</ul>
			</LeaderBoard>
			<ContainerAlligmentRow>
				2524542
				<ContainerAlligmentCell>23524545</ContainerAlligmentCell>
				<ContainerAlligmentCell>23524545</ContainerAlligmentCell>
			</ContainerAlligmentRow>

			<CoverBack>SSSSSSSSSSSSSSSSSs</CoverBack>

			<CoverbackShorthand>
				xxxxxxxxxxxxxxxxxxxxxxx Nostrum incidunt tenetur veritatis
				asperiores odio sed. Eos iste dolore. Iusto nemo molestiae
				veritatis doloremque sap iente laudantium repudiandae ut
				repellat. Aut repudiandae ut impedit minus ex. Voluptas veniam
				voluptas quo nobis laudantium.
			</CoverbackShorthand>
			<Red>D0ubleD0m1nation</Red>
			<Green>D0ubleD0m1nation</Green>
			<CollapsingMargins>
				<p>Veritatis odit in sed rerum et aut consequatur minima.</p>
			</CollapsingMargins>

			<CollapsingMargins style={{ margin: "10px" }}>
				<h1 style={{ margin: "70px" }}>ollapsing margin fx</h1>
				<p style={{ margin: "70px" }}>veritatis alias sunt</p>
			</CollapsingMargins>

			<CustomOL>
				<h2>Something here</h2>
				<li>dubas</li>
				<li>bombud</li>
				<li>uas</li>
				<li>METILXXX</li>
			</CustomOL>
			<h1>Grid Princeps</h1>
			<GridLine>
				<GridCol>11111111111</GridCol>
				<GridCol>11111111111</GridCol>
				<GridCol>11111111111</GridCol>
				<GridCol>2222222222222</GridCol>
				<GridCol>11111111111</GridCol>
			</GridLine>

			<GridLine>
				<img
					className={stlUnitCard.clearfixit}
					src={deathDread}
					alt='1'
				/>
				<img
					className={stlUnitCard.clearfixit}
					src='https://via.placeholder.com/350'
					alt='1'
				/>
				<img
					className={stlUnitCard.clearfixit}
					src='https://via.placeholder.com/150'
					alt='1'
				/>
				<img
					className={stlUnitCard.clearfixit}
					src='https://via.placeholder.com/150'
					alt='1'
				/>
			</GridLine>
		</Container>
	);
}

/* TODO: Qouc'kkka' dosent work

/*

''Ty'pe S'
cage -41-
s85 style/ i/nherinheritances
Type 67 PseudoSelectors
98 - 122 Inheritrd Styles Accamulation
111-135 Casca in ACTION
116-140 Cascade in ACTN
116-140 Fonts Applied oogle Fonts
123
Plaing with multicursor$s
page 129
page 151 Playing with fonts
page 168 192 Stylig Lists
page 204 228 box shadows
height and width
wraooing content with float elements
sidebar creator
adding grafic to web pages
styling backgrounds
bring special effects to background images




*/
export default UnitCard;
