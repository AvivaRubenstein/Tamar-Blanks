import React from 'react';
export default function Research() {
    return (
        <div >
        
            <div className="container-fluid">
            <p id="bio"> 
				My research is in algebra: I am interested in quadratic forms, fields, division algebras, and Lie algebras. My advisor is <a href="https://dkrashen.github.io/">Danny Krashen</a>.
			</p>
			<h4><strong>Publications</strong></h4>
			<p>
				In addition to algebra, I am also interested in cryptography, and I used to do research in graph theory.
			</p>
			<ul>
				<li><b><a href="https://eprint.iacr.org/2021/154.pdf">Generating cryptographically-strong random lattice bases and recognizing rotations of Z<sup>n</sup></a></b>, with Stephen D. Miller. In <a href="https://pqcrypto2021.kr/">PQCrypto 2021</a>. 
				</li>
				<ul>
					<li>Related talk at <a href="https://www.birs.ca/events/2021/5-day-workshops/21w5205/videos">Banff International Research Station</a>.</li>
				</ul>
				<li><b><a href="https://www.ieee-security.org/TC/SP2017/papers/96.pdf">Optimized Honest-Majority MPC for Malicious Adversaries - Breaking the 1 Billion-Gate Per Second Barrier</a></b>, with Toshinori Araki, Assi Barak, Jun Furukawa, Yehuda Lindell, Ariel Nof, Kazuma Ohara, Adi Watzman, and Or Weinstein, <i>38th IEEE Security and Privacy Conference</i>, page 843-862 (2017).
				</li>
				<li><b>Maximum rectilinear crossing numbers of polyomino graphs</b>, with Elie Feder and Heiko Harborth, <i>Congressus Numernatium</i> 229, page 29-53 (2017).
				</li>
				<li><b>Maximum rectilinear crossing numbers for game board graphs</b>, with Elie Feder and Heiko Harborth, <i>Congressus Numerantium</i> 226, page 87-102 (2016).
				</li>
				<li><b>Extremal values of the maximum rectilinear crossing number of (p, q)-graphs</b>, with Jens-P. Bode, Elie Feder, Heiko Harborth, and David Horowitz, <i>Congressus Numerantium</i> 223, page 139-149 (2015).
				</li>
				<li><b>Extremal values of the maximum rectilinear crossing number of cycles with diagonals</b>, with Jens-P. Bode, Elie Feder, Heiko Harborth, and David Horowitz, <i>Congressus Numerantium</i> 220, page 33-48 (2014).
				</li>
			</ul>
		</div>
        <div className="container-margins">
		<div className="container-fluid">
			<h4><strong>Selected Seminar Talks (Recorded)</strong></h4>
			<p>
			 <b><a href="https://www.youtube.com/watch?v=u80BARcdLW0">Quadratic forms and algebraic structures</a></b>, at the Rutgers <a href="https://sites.math.rutgers.edu/~sz446/GARTS/">Graduate Algebra and Representation Theory Seminar</a>,  April 25, 2022. A Witt invariant is a rule that assigns quadratic forms to algebraic objects, satisfying some conditions. There is a ring of Witt invariants, called Inv_k(G,W), for any finite group G and field k. These rings are not well understood except in some specific cases. In this talk, we'll define the ring Inv_k(G,W), give some examples of what is and isn't known, and discuss some of the tools one can use to think about Witt invariants, including ideas from representation theory, category theory, and Galois theory.
			</p>
			<p>
			<b><a href="https://www.youtube.com/watch?v=4AU8raNO7jE">Schur's Lemma and Beyond </a></b>, at the Rutgers <a href="https://sites.math.rutgers.edu/~sz446/GARTS/">Graduate Algebra and Representation Theory Seminar</a>,  April 7, 2021. We often think of Schur's lemma as a fact about representations... but is it? In this talk, we'll start by stating and proving a classic version of Schur's lemma, and see how it tells us something surprising about quadratic forms. Then we will broaden our perspective and see that Schur's lemma runs much deeper than just representation theory (in fact it holds in any abelian category!), and look at an example of Schur's lemma applied to sheaves. We'll also mention a nice connection to division algebras and the Brauer group. 
			</p>
		</div>
	</div>
        </div>
    )
}