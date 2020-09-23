/**
 * Created by Админ on 9/6/2020.
 */
import React from 'react';
import './CSSRampage.style.css';
import deathCompanyDreadnout from './assets/death-company-dreadnout.jpg';
import ReactDOM from 'react-dom';


document.title        = 'CSS Manual TurboCharge';
const colorQuickSlver = 'violet';
function CSSRampage() {
	return (
		<>
		<header className="O-blackrage">
			<aside className="O-aside">
			<section className="M-asideChapterHistory">
				<ol>
					<li>History of the chapter</li>
					<li>Why all "Blackrage" stuff was happend</li>
				</ol>
			</section>
			<section className="M-asideChapterCombat">
				<ol>
					<li>Chapter doctrine</li>
					<li>Chapter Traditions</li>
				</ol>
			</section>

			</aside>

			<figure>
				<img className="A-blackrageImg"
				     src={deathCompanyDreadnout}
				     alt="DCDreadnout"/>
				<figcaption><h2>Mighty Death Compant Dreadnout</h2></figcaption>
			</figure>
			<h1>The Black Rage</h1>
			<p className="intro">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit
				. Deleniti distinctio eius harum porro qui
				recusandae reiciendis tenetur unde velit voluptatum!
			</p>
			<p>There is explanation of blackrage in
				<span className="A-blackrageChapter">
					BloodAngels Chapters
				</span>
			</p>

			<p><q className="A-blackrageQuote">Even in death we still serve</q> Caplain Barbatos</p>
		</header>

		<body className="special">
			<div className="grid4">
				<div className="cell1">1</div>
				<div className="cell2">2</div>
				<div className="cell3">3</div>
				<div className="cell4">
					<span>gg</span>
				<span>YYYYY</span>
				<span>TR</span>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nostrum.
				</div>
			</div>

			<div className="inheritor">
				<h1>The Amazing World of CSS</h1>
				<p><strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit <em>voluptatem accusantium</em> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <strong>inventore veritatis et quasi architecto beatae</strong> vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia  eos qui ratione voluptatem sequi nesciunt. Learn more about CSS at the <a href="http://www.w3.org/Style/CSS/">W3C CSS Home Page</a>.</p>
				<ul>
					<li><a href="#">link1</a>adipisci velit</li>
					<li><a href="#">link2</a>autem vel eum iure re</li>
					<li><a href="#">link3</a> ut lautem vel eum i</li>
                </ul>
                <h2>Who Knew CSS Had Such Power?</h2>
				  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem <strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit <em>voluptatem accusantium</em> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <em>inventore veritatis et quasi architecto</em> beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia  eos qui ratione voluptatem sequi nesciunt. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
				  <h3>Not Me!</h3>
				  <p><strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit <em>voluptatem accusantium</em> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia  eos qui ratione voluptatem sequi nesciunt. odi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima <strong>veniam, quis nostrum</strong> exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                <h3>Me Neither!</h3>
                    <p><strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit <em>voluptatem accusantium</em> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia  eos qui ratione voluptatem sequi nesciunt. </p>
			</div>

		</body>

		<footer className="O-footer">
			<nav className="M-footerNav">
				<ul>
					<li style={{
						color: colorQuickSlver,
						fontSize: '1,5em',
					}}>-=home=-</li>
					<li><address>about</address></li>
					</ul>
			</nav>
		</footer>


		<link href='http://fonts.googleapis.com/css?family=Varela+Round'
		      rel='stylesheet'/>


		
		</>
	);
}

/*Page 22*/
/*Page 41*/
/*Type Selectors*/
/*Type 67 PseudoSelectors*/
/*85 style inheritance*/
/*91 - 115 style inheritance*/


export default CSSRampage;