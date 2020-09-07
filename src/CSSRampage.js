/**
 * Created by Админ on 9/6/2020.
 */
import React from 'react';
import './CSSRampage.style.css';
import deathCompanyDreadnout from './assets/death-company-dreadnout.jpg';
import ReactDOM from 'react-dom';


document.title = 'CSS Manual TurboCharge';
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
				<figcaption>Mighty Death Compant Dreadnout</figcaption>
			</figure>
			<h1>The Black Rage</h1>
			<p>There is explanation of blackrage in
				<span className="A-blackrageChapter">
					BloodAngels Chapters
				</span>
			</p>

			<p><q className="A-blackrageQuote">Even in death we still serve</q> Caplain Barbatos</p>
		</header>

		<footer className="O-footer">
			<nav className="M-footerNav">
				<ul>
					<li>home</li>
					<li>about</li>
					</ul>
			</nav>
		</footer>
		</>
	);
}


export default CSSRampage;