import React, { useEffect, useRef, useState } from "react";
import GameBtn from "./GameBtn";
import "./SimonGame.css";

const colors = ["green", "red", "yellow", "blue"];

function SimonGame() {
	// useState avec un tableau vide pour intégrer la séquence de couleur
	const [sequence, setSequence] = useState([]);
	// useSate avec booléen pour savoir si on est en train de jouer ou pas
	const [playing, setPlaying] = useState(false);
	// useState pour vérifier si on clic sur la bonne couleur de la sequence
	const [playingIndex, setPlayingIndex] = useState(0);

	// useRef référence les couleurs pour cibler les boutons ?
	const greenRef = useRef(null);
	const redRef = useRef(null);
	const yellowRef = useRef(null);
	const blueRef = useRef(null);

	// fonction qui ajoute les couleurs
	const addNewColor = () => {
		const color = colors[Math.floor(Math.random() * 4)];
		// Copie de l'ancienne séquence + nouvelle couleur
		const newSequence = [...sequence, color];
		setSequence(newSequence);
	};

	// fonction qui lance la partie (Play)
	const handleNextLevel = () => {
		if (!playing) {
			// empêche de cliquer plusieurs fois sur play
			setPlaying(true);
			addNewColor();
		}
	};
	// fonction qui selectionne le bouton cliqué
	const handleColorClick = (event) => {
		if (playing) {
			// récupère l'attribut de la couleur au moment (event) du clic
			const clickColor = event.target.getAttribute("color");
			// on vérifie si on clic sur la bonne couleur de la séquence
			if (sequence[playingIndex] === clickColor) {
				// Si on a cliqué sur la dernière couleur de la séquence
				if (playingIndex === sequence.length - 1) {
					setTimeout(() => {
						// alors on rappelle toute la séquence
						setPlayingIndex(0);
						// et on rajoute une couleur
						addNewColor();
					}, 250);
				}
				// tant qu'il reste une couleur à cliquer
				else {
					setPlayingIndex(playingIndex + 1);
				}
			}
			// si on a cliqué sur la mauvaise couleur
			else {
				// reset
				resetGame();
				// partie perdue
				alert("Perdu !");
			}
		}
	};
	// fonction qui restart la partie
	const resetGame = () => {
		setSequence([]);
		setPlaying(false);
		setPlayingIndex(0);
	};
	// useEffect
	useEffect(() => {
		// fonction qui montre la séquence de couleur
		// index 0 pour le début de la séquence
		if (sequence.length > 0) {
			const showSequence = (index = 0) => {
				let ref = null;

				// condition pour relier les boutons et les couleurs dans le tableau ?
				if (sequence[index] === "green") ref = greenRef;
				if (sequence[index] === "red") ref = redRef;
				if (sequence[index] === "yellow") ref = yellowRef;
				if (sequence[index] === "blue") ref = blueRef;

				// ajoute un délai
				setTimeout(() => {
					// illumine la ref/couleur/bouton
					ref.current.classList.add("brightness-[2.5]");
					setTimeout(() => {
						// retire l'illumination
						ref.current.classList.remove("brightness-[2.5]");
						//
						if (index < sequence.length - 1) showSequence(index + 1);
					}, 250);
				}, 250);
			};

			showSequence();
		}
		// paramètre "tableau de dépendance" qui permet d'executer la fonction quand ce paramètre change
	}, [sequence]);

	return (
		<>
			{/* Main container */}
			<div className="flex justify-center item-center bg-neutral-800 w-screen h-screen">
				{/* {Game container} */}
				<div className="relative flex flex-col justify-center items-center">
					{/* {Green and Red container} */}
					<div>
						{/* {Green} */}
						<GameBtn
							color="green"
							border="rounded-tl-full"
							bg="bg-green-500"
							onClick={handleColorClick}
							ref={greenRef}
						/>
						{/* {Red} */}
						<GameBtn
							color="red"
							border="rounded-tr-full"
							bg="bg-red-500"
							onClick={handleColorClick}
							ref={redRef}
						/>
					</div>
					{/* {Yellow and Blue container} */}
					<div>
						{/* {Yellow} */}
						<GameBtn
							color="yellow"
							border="rounded-bl-full"
							bg="bg-yellow-400"
							onClick={handleColorClick}
							ref={yellowRef}
						/>
						{/* {Blue} */}
						<GameBtn
							color="blue"
							border="rounded-br-full"
							bg="bg-blue-500"
							onClick={handleColorClick}
							ref={blueRef}
						/>
					</div>
					<button
						type="button"
						className="absolute bg-neutral-900 text-white text-xl sm:text-2xl font-bold rounded-full w-[150px] sm:w[175px] h-[150px] sm:h[175px] duration-200 hover:scale-105"
						onClick={handleNextLevel}
					>
						{/* affiche play pour débuter la partie puis affiche la taille du tableau séquence aka le compteur */}
						{sequence.length === 0 ? "Play" : sequence.length}
					</button>
				</div>
			</div>
		</>
	);
}

export default SimonGame;
