import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../widgets/header/Header';
import { Login } from '../../widgets/Login/Login';
import { AddNewsModal, Modal } from '../../widgets/Modal/Modal';
import { Register } from '../../widgets/Register/Register';
import admin from './admin.scss';
export const Admin = () => {
	const [homeModal, setHomeModal] = useState(false);
	const [addNewsModal, setAddNewsModal] = useState(false);
	const [addNewComad, setaddNewComad] = useState(false);

	// add game START
	const ligaNameref = useRef();
	const teamAref = useRef();
	const teamBref = useRef();
	const resAref = useRef();
	const resBref = useRef();
	const GameDateref = useRef();
	const handleSubmit = (evt) => {
		evt.preventDefault();

		console.log({
			ligaName: ligaNameref.current.value,
			teamA: teamAref.current.value,
			teamB: teamBref.current.value,
			resultA: +resAref.current.value,
			resultB: +resBref.current.value,
			date: GameDateref.current.value,
		});
		axios
			.post('http://10.10.0.43:2005/game', {
				ligaName: ligaNameref.current.value,
				teamA: teamAref.current.value,
				teamB: teamBref.current.value,
				resultA: +resAref.current.value,
				resultB: +resBref.current.value,
				date: GameDateref.current.value,
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));
	};
	// add game FINISH
	// add news START
	const imgref = useRef();
	const titleref = useRef();
	const descriptionref = useRef();
	const dateref = useRef();

	const handleAddNews = (evt) => {
		evt.preventDefault();

		const formData = new FormData();
		formData.append('image', imgref.current?.files[0]);
		formData.append('title', titleref.current?.value);
		formData.append('description', descriptionref.current?.value);
		formData.append('date', dateref.current?.value);
		console.log({
			img: imgref.current.value,
			title: titleref.current.value,
			description: descriptionref.current.value,
			date: dateref.current.value,
		});
		console.log(formData);
		axios
			.post('http://10.10.0.43:2005/news', formData)
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));
		// fetch("http://localhost:5000/book", {
		//   method: "POST",
		//   headers: {
		//     Authorization: localData,
		//   },
		//   body: formData,
		// })
	};
	// add news FINISHED
	// -----\
	const NewImgref = useRef();
	const LigaNameref = useRef();
	const ComadNameref = useRef();

	const handleAddNewComad = (evt) => {
		evt.preventDefault();
		console.log({
			ligaName: LigaNameref?.current.value,
			name: ComadNameref?.current.value,
		});
		fetch('http://10.10.0.43:2005/team', { mode: 'cors' })
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));

		// axios
		// 	.post('http://10.10.0.43:2005/team', {
		// 		ligaName: LigaNameref?.current.value,
		// 		name: ComadNameref?.current.value,
		// 	})
		// 	.then((res) => {
		// 		console.log(res);
		// });
		//     .then((res) => {
		// res.json()
		//     }) .then((data) => {
		//       data
		//           })
		//     .catch((err) => console.log(err));
	};
	return (
		<>
			<Header />
			<Modal modal={homeModal} setModal={setHomeModal} title='Add Games'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Enter LigaName...'
						ref={ligaNameref}
						className='myInput'
					/>
					<input
						type='text'
						placeholder='Enter first comand Name'
						ref={teamAref}
						className='myInput'
					/>
					<input
						type='text'
						placeholder='Enter second comand Name'
						ref={teamBref}
						className='myInput'
					/>
					<input
						type='number'
						placeholder='Enter firs comand result'
						ref={resAref}
						className='myInput'
					/>
					<input
						type='number'
						placeholder='Enter second comand result'
						ref={resBref}
						className='myInput'
					/>
					<input
						type='date'
						placeholder='Enter Date'
						ref={GameDateref}
						className='myInput'
					/>

					<button className='add_btn'>Send</button>
				</form>
			</Modal>

			<AddNewsModal
				modal={addNewsModal}
				setModal={setAddNewsModal}
				title='Add News'
			>
				<form onSubmit={handleAddNews}>
					<input
						type='file'
						placeholder='Enter ImgFile'
						ref={imgref}
						className='myInput'
					/>
					<input
						type='text'
						placeholder='Enter news title '
						ref={titleref}
						className='myInput'
					/>
					<input
						type='text'
						placeholder='Enter news discreption'
						ref={descriptionref}
						className='myInput'
					/>

					<input
						type='date'
						placeholder='Enter Date'
						ref={dateref}
						className='myInput'
					/>

					<button type='submit' className='add_btn'>
						Send
					</button>
				</form>
			</AddNewsModal>

			<AddNewsModal
				modal={addNewComad}
				setModal={setaddNewComad}
				title='Add New Comand'
			>
				<form onSubmit={handleAddNewComad}>
					{/* <input type="file" placeholder='Enter comand ImgFile' ref={imgref} className='myInput' /> */}
					<input
						type='text'
						placeholder='Enter  conmad name '
						ref={ComadNameref}
						className='myInput'
					/>
					<input
						type='text'
						placeholder='Enter Liga Name'
						ref={LigaNameref}
						className='myInput'
					/>

					<button type='submit' className='add_btn'>
						Send
					</button>
				</form>
			</AddNewsModal>
			<div className='main_box'>
				<div className='verticalNav'>
					<div className='btn_wrapper'>
						<button
							className='add_game admin_btns'
							onClick={() => setHomeModal(true)}
						>
							{' '}
							Add Games{' '}
						</button>
					</div>
					<div className='btn_wrapper'>
						<button
							className='add_news admin_btns'
							onClick={() => setAddNewsModal(true)}
						>
							{' '}
							Add News{' '}
						</button>
					</div>
					<div className='btn_wrapper'>
						<button
							className='add_game admin_btns '
							onClick={() => setaddNewComad(true)}
						>
							{' '}
							Add new Comad{' '}
						</button>
					</div>
				</div>
				<div className='main_part'>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
						officia praesentium veritatis deserunt. Molestiae tempora, accusamus
						voluptates asperiores error commodi praesentium ullam? Consectetur
						eius distinctio ut est voluptatibus ratione illum excepturi!
						Voluptatum laudantium aliquam, dolorum labore est ducimus in iusto
						blanditiis, enim nostrum voluptate quidem ab. Laudantium quod
						eligendi cum.
					</p>
				</div>
			</div>
		</>
	);
};
