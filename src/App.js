import logo from './logo.svg';
import './App.css';

import React, { useState }from 'react';

  //7
  // function App() {
  // 	return <div>
  // 		Hello, World!
  //     <p className='ooo'>new</p>
  //     <p className='wkow'>new</p>
  //     <p className='djwj'>new</p>
  // 	</div>;
  // }
  
  //8
  // function App() {
  // 	return	<ul>
  //     <li>1</li>
  //     <li>2</li>
  //     <li>3</li>
  //     <li>4</li>
  //     <li>5</li>
  //     <li>6</li>
  //     <li>7</li>
  //     <li>8</li>
  //     <li>9</li>
  //     <li>10</li>
  //   	</ul>;
  // }
  
  //9
  // function App() {
  // 	return(
  // 		<ul>
  // 			<li>text1</li>
  // 			<li>text2</li>
  // 			<li>text3</li>
  // 		</ul>
  //   );
  // }
  
  //10
  //Вариант 1
  // function App() {
  // 	return <ul>
  //   <ul>
  // 		<li>text1</li>
  // 		<li>text2</li>
  // 		<li>text3</li>
  // 	</ul>
  // 	<ul>
  // 		<li>text1</li>
  // 		<li>text2</li>
  // 		<li>text3</li>
  // 	</ul>
  //   </ul>;
  // }
  
  //Вариант 2
  // function App() {
  // 	return(
  //   <>
  //   <ul>
  // 		<li>text1</li>
  // 		<li>text2</li>
  // 		<li>text3</li>
  // 	</ul>
  // 	<ul>
  // 		<li>text1</li>
  // 		<li>text2</li>
  // 		<li>text3</li>
  // 	</ul>
  //   </>
  //   );
  // }
  
  //11
  // function App() {
  // 	return <input />;
  // }
  
  //12
  // function App() {
  // 	return (
  //   <>
  //     <input />
  //     <input />
  //     <input />
  //   </>
  //   );
  // }
  
  //13
  // function App() {
  // 	const str1 = 'text1';
  // 	const str2 = 'text1';
    
  // 	return <div>
  // 		<p>{str1}</p>
  // 		<p>{str2}</p>
  // 	</div>;
  // }
  
  //14
  //1
  // function App() {
  // 	const name = 'user';
  // 	const age  = '30';
    
  // 	return <div>
  // 		name: {name}
  // 		age:  {age}
  // 	</div>;
  // }
  
  //15
  // function App() {
  // 	const arr = [1, 2, 3, 4, 5];
  //   return <ul>
  //     <li>{arr[0]}</li>
  //     <li>{arr[1]}</li>
  //     <li>{arr[2]}</li>
  //     <li>{arr[3]}</li>
  //     <li>{arr[4]}</li>
  //   </ul>
  // }
  
  //16
  // function App() {
  // 	const obj = {name: 'john', surname: 'smit'};
  
  //   return <p>
  //     <span>{obj.name}</span> <br />
  //     <span>{obj.surname}</span>
  //   </p>
  // }
  
  //17
  // function App() {
  // 	const attr = 'block';
    
  // 	return <div id = {attr}>
  // 		text
  // 	</div>;
  // }
  
  //19
  // function App() {
  // 	const li1 = <><li>text1</li><li>text2</li><li>text3</li></>
  
  //   return <main>
  //     {li1}
  //   </main>;
  // }
  
  //20
  // function App() {
  // 	const items = <><li>text1</li><li>text2</li><li>text3</li></>;
    
  // 	return <ul>
  // 		{items}
  // 	</ul>
  // }
  
  //22
  // function App() {
  // 	return <div>
  // 		<input />
  //     <br />
  //     <input />
  //     <br />
  //     <input />
      
  // 	</div>;
  // }
  
  //23
  //1
  // function App() {
  // 	return <div>
  // 		<ul>
  //       <li>1</li>
  //       <li>2</li>
  //       <li>3</li>
  //       <li>4</li>
  //       <li>5</li>
  //       <li>6</li>
  //       <li>7</li>
  //       <li>8</li>
  //       <li>9</li>
  //       <li>10</li>
  //     </ul>
  // 	</div>;
  //}
  
  //2
  // function App() {
  // 	return <table>
  // 		<tbody>
  // 			<tr>
  // 				<td>1</td>
  // 				<td>2</td>
  // 			</tr>
  // 			<tr>
  // 				<td>3</td>
  // 				<td>4</td>
  // 			</tr>
  // 		</tbody>
  // 	</table>;
  // }
  
  //Условия
  //26
  // function App() {
  // 	let text;
  // 	const show = true;
    
  // 	if (show) {
  // 		text = <p>text</p>;
  // 	}
    
  // 	return <div>
  // 		{text}
  // 	</div>;
  // }
  
  //28
  // function App() {
  // 	const age = 19;
    
  // 	return <div>
  // 		{age > 18?( 
  //       <p>welcome</p>
  //     ):(
  //       <p>wewie</p>
  //     )}
  // 	</div>;
  // }
  
  //29
  // function App() {
  // 	const isAuth = true;
  // 	return <div>
  //     {isAuth == true ?(
  // 		  <p>вы авторизованы</p>
  //     ):(
  //       <p>не удалось авторизоваться</p>
  //     )}
  // 	</div>;
  // }
  
  //30
  // function App() {
  // 	const isAuth = false;
    
  // 	return <div>
  // 		{!isAuth && <p>пожалуйста, авторизуйтесь</p>}
  // 	</div>;
  // }
  
  //Функции
  //31
  // function getDigitsSum(number) {
  //   let sum = 0;
  //   while (number) {
  //     sum += number % 10;
  //     number = Math.floor(number / 10);
  //   }
  //   return sum;
  // }
  
  // function App() {
  //   function square(num) {
  //     return num ** 2;
  //   }
    
  //   function cube(num) {
  //     return num ** 3;
  //   }
    
  //   const sum = square(3) + cube(4);
  //   const sumOfDigits = getDigitsSum(123);
    
  //   return (
  //     <div>
  //       <p>Сумма квадрата 3 и куба 4: {sum}</p>
  //       <p>Сумма цифр числа 123: {sumOfDigits}</p>
  //     </div>
  //   );
  // }
  
  //33
  // function App() {
  // 	function show1() {
  // 		alert(1);
  // 	}
    
  // 	function show2() {
  // 		alert(2);
  // 	}
    
  // 	return <div>
  // 		<button onClick={show1}>act1</button>
  // 		<button onClick={show2}>act2</button>
  // 	</div>;
  // }
  
  //34
  // function App() {
  //     function showMess(text) {
  // 		alert(text);
  // 	}
  // 	return <div>
  // 		<button onClick={() => showMess('1')}>act1</button>
  // 		<button onClick={() => showMess('2')}>act2</button>
  // 		<button onClick={() => showMess('3')}>act3</button>
  // 	</div>;
  // }
  
  //35
  //1
  // function App() {
  // 	function func(event) {
  // 		console.log(event); 
  // 	}
    
  // 	return <div>
  // 		<button onClick={func}>act</button>
  // 	</div>;
  // }
  
  //2
  // function App() {
  // 	function func(event) {
  // 		console.log(event.target); 
  // 	}
    
  // 	return <div>
  // 		<button onClick={func}>act</button>
  // 	</div>;
  // }
  
  //Формирование тегов
  //37
  // function App() {
  // 	const arr = [
  // 		<li>1</li>,
  // 		<li>2</li>,
  // 		<li>3</li>,
  // 		<li>4</li>,
  // 		<li>5</li>,
  // 	];
  //     return <ul>
  //         {arr}
  //     </ul>;
  // }
  
  //38
  // function App() {
  // 	const arr = [];
    
  // 	for (let i = 1; i <= 5; i++) {
  // 		arr.push(<li>{i}</li>);
  // 	}
    
  // 	return <ul>
  // 		{arr}
  // 	</ul>;
  // }
  
  //39
  // function App() {
  // 	const arr = ['a', 'b', 'c', 'd', 'e'];
    
  // 	const res = arr.map(function(item) {
  // 		return <li>{item}</li>;
  // 	});
    
  // 	return <ul>
  // 		{res}
  // 	</ul>;
  // }
  
  //40
  // function App() {
  // 	const arr = ['a', 'b', 'c', 'd', 'e'];
    
  // 	const res = arr.map(function(item, index) {
  // 		return <li key={index}>{item}</li>;
  // 	});
    
  // 	return <ul>
  // 		{res}
  // 	</ul>;
  // }
  
  //43
  // function App() {
  //     const users = [
  //         {id: '1', name: 'user1', surn: 'surn1', age: 30},
  //         {id: '2', name: 'user2', surn: 'surn2', age: 31},
  //         {id: '3', name: 'user3', surn: 'surn3', age: 32},
  //     ];
  
  // 	const res = users.map(function(item, index) {
  // 		return <tr key={item.id}>
  //             <td>{item.name}</td>, 
  //             <td>{item.surn}</td>, 
  //             <td>{item.age}</td>
  // 		</tr>;
  // 	});
  // 	return <table>
  // 		<thead>
  // 			<tr>
  // 				<td>name</td>
  // 				<td>surname</td>
  //                 <td>age</td>
  // 			</tr>
  // 		</thead>
  // 		<tbody>
  // 			{res}
  // 		</tbody>
  // 	</table>;
  // }
  
  //48
  //генерация id с помощью nanoid 
  // import { nanoid } from 'nanoid';
  
  // function id() {
  //   return nanoid();
  // }
  
  //react-uuid
  // import { v4 as uuidv4 } from 'uuid';
  
  // function id() {
  //   return uuidv4();
  // }
  
//49
// import { nanoid } from 'nanoid';

// function id() {
//   return nanoid();
// }


// function UserList() {
//   const users = [
//     { id: id(), name: 'John', age: 25 },
//     { id: id(), name: 'Alice', age: 30 },
//     { id: id(), name: 'Bob', age: 28 },
//   ];

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             Name: {user.name}, Age: {user.age}, ID: {user.id}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;

//Стейты
//52
// function App() {
// 	const [name, setName] = useState('John');
//   const [surname, setSurname] = useState('Smith');
// 	const [age, setAge] = useState(34);

// 	return <div>
// 		<span>{name}</span>
//     <span>{surname}</span>
//     <span>{age}</span>
// 	</div>;
// }

//53
// function App() {
// 	const [name, setName] = useState('John');
// 	const [surname, setSurname] = useState('Smith');

// 	return <div>
// 		<span>{name}</span>
//     <span>{surname}</span>
// 		<button onClick={() => setName('Bruh')}>
// 			btn</button> 
//       <button onClick={() => setSurname('Bruhman')}>
// 			btn</button> 
// 	</div>;
// }

//54
// function App() {
//   const [user, setUser] =useState('admin');
//   const [ban, setBan] = useState('notBanned')
  
//   return <div>
//     <p>{user}</p>
//     <p>{ban}</p>
//     <button onClick={() => setBan('banned')}>ban</button>
//     <button onClick={() => setBan('notBanned')}>unban</button>
//   </div>
// }
//2
// function App() {
//     const [isBanned, setIsBanned] = useState(false);
    
//     const handleBanToggle = () => {
//         setIsBanned(!isBanned);
//     };
    
//     return (
//         <div>
//             <span>{isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</span>
//             <button onClick={handleBanToggle}>{isBanned ? 'Разбанить' : 'Забанить'}</button>
//         </div>
//     );
// }

//56
// function App() {
// 	const [value, setValue] = useState('');
// 	const [value1, setValue1] = useState('');

// 	return <div>
// 		<input value={value} onChange={event => setValue(event.target.value)} />
// 		<p>text: {value}</p>

//     <input value={value1}onChange={event => setValue1(event.target.value)} />
// 		<p>text: {value1}</p>
// 	</div>;
// }

//57
// function App() {
//   const [value, setValue] = useState('');

//   function handleChange(event){
//     setValue(event.target.value);
//   }

//   return <div>
//     <input value = {value} onChange={handleChange}
//     /> 
//     <p>Количество символов: {value.length}</p>
//     </div>
// }

//58
//1
// function App() {
// 	const [value, setValue] = useState(0);
	
// 	function handleChange(event) {
// 		setValue(event.target.value);
// 	}
	
// 	return <div>
// 		<input value={value} onChange={handleChange} 
// 			/> 
// 		<p>{(2024 - value)}</p>
// 	</div>;
// }

//2
// function App() {
// 	const [value, setValue] = useState(0);
	
// 	function handleChange(event) {
// 		setValue(event.target.value);
// 	}
	
// 	return <div>
// 		<input value={value} onChange={handleChange} 
// 			/> 
// 		<p>{(value / 2.65)}</p>
// 	</div>;
// }

//59
// function App() {
// 	const [value1, setValue1] = useState(0);
// 	const [value2, setValue2] = useState(0);
// 	const [value3, setValue3] = useState(0);
// 	const [value4, setValue4] = useState(0);
//   const [value5, setValue5] = useState(0);

//   function handleChange1(event) {
// 		setValue1(+event.target.value);
// 	}
	
// 	function handleChange2(event) {
// 		setValue2(+event.target.value);
// 	}

//   function handleChange3(event) {
// 		setValue3(+event.target.value);
// 	}
	
//   function handleChange4(event) {
// 		setValue4(+event.target.value);
// 	}

//   function handleChange5(event) {
// 		setValue5(+event.target.value);
// 	}

// 	return <div>
// 		<input value={value1} onChange={handleChange1} 
// 			/> 
// 		<input value={value2} onChange={handleChange2} 
// 			/> 
//     <input value={value3} onChange={handleChange3} 
// 			/> 
//     <input value={value4} onChange={handleChange4} 
// 			/> 
//     <input value={value5} onChange={handleChange5} 
// 			/> 

// 		<p>{(value1 + value2 + value3 + value4 + value5)/5 }</p>
// 	</div>
// }

//60
//1
// function App() {
// 	const [value1, setValue1] = useState(0);
// 	const [value2, setValue2] = useState(0);
// 	const [result, setResult] = useState(0);
	
// 	return <div>
// 		<input value={value1} 
// 			onChange={event => setValue1(event.target.value)} 
// 			/> 
// 		<input value={value2} 
// 			onChange={event => setValue2(event.target.value)} 
// 			/> 
		
// 		<button onClick={() => setResult(Number(value1) + Number(value2))}>btn</button> 
//     <button onClick={() => setResult(Number(value1) * Number(value2))}>btn</button> 

// 		<p>result: {result}</p>
// 	</div>;
// }

//2
// function App() {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [difference, setDifference] = useState('');

//   const handleCalculateDifference = () => {
//       const start = new Date(startDate);
//       const end = new Date(endDate);
//       const differenceInTime = end.getTime() - start.getTime();
//       const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
//       setDifference(differenceInDays);
//   };

//   return (
//       <div>
//           <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="(YYYY-MM-DD)" />
//           <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="(YYYY-MM-DD)" />
//           <button onClick={handleCalculateDifference}>click</button>
//           <p>{difference}</p>
//       </div>
//   );
// }

//4
// function App() {
//   const [number, setNumber] = useState('');
//   const [sum, setSum] = useState('');

//   const calculateSum = () => {
//       const digits = number.split('').map(Number);
//       const sumOfDigits = digits.reduce((acc, curr) => acc + curr, 0);
//       setSum(sumOfDigits);
//   };

//   return (
//       <div>
//           <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} onBlur={calculateSum} />
//           <p>{sum}</p>
//       </div>
//   );
// }

//5
// function App() {
//   const [number, setNumber] = useState('');
//   const [productOfDivisors, setProductOfDivisors] = useState('');

//   const calculateProductOfDivisors = () => {
//       const num = parseInt(number);
//       let product = 1;
//       for (let i = 1; i <= num; i++) {
//           if (num % i === 0) {
//               product *= i;
//           }
//       }
//       setProductOfDivisors(product);
//   };

//   return (
//       <div>
//           <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} onBlur={calculateProductOfDivisors} />
//           <p>{productOfDivisors}</p>
//       </div>
//   );
// }

//61
//1
// function transliterate(text) {
//   const transliterationMap = {
//       'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
//       'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
//       'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
//       'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu',
//       'я': 'ya',
//       'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh',
//       'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O',
//       'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'Ts',
//       'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sch', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu',
//       'Я': 'Ya'
//   };

//   return text.split('').map(char => transliterationMap[char] || char).join('');
// }

// function App() {
//   const [value, setValue] = useState('');

//   function handleChange(event) {
//       setValue(event.target.value);
//   }

//   const transliteratedValue = transliterate(value);

//   return (
//       <div>
//           <textarea value={value} onChange={handleChange} />
//           <p>{transliteratedValue}</p>
//       </div>
//   );
// }

//2
// function sumNumbersInText(text) {
//   const lines = text.split('\n');
//   let sum = 0;

//   lines.forEach(line => {
//       const numbers = line.split(' ').map(Number);
//       numbers.forEach(number => {
//           if (!isNaN(number)) {
//               sum += number;
//           }
//       });
//   });

//   return sum;
// }

// function App() {
//   const [value, setValue] = useState('');

//   function handleChange(event) {
//       setValue(event.target.value);
//   }

//   const sum = sumNumbersInText(value);

//   return (
//       <div>
//           <textarea value={value} onChange={handleChange} />
//           <p>Сумма введенных чисел: {sum}</p>
//       </div>
//   );
// }

//62
//1
// function App() {
//   const [checked, setChecked] = useState(true);
//   const [message, setMessage] = useState('');

//   function handleButtonClick() {
//       if (checked) {
//           setMessage('Приветствую вас!');
//       } else {
//           setMessage('До свидания!');
//       }
//   }

//   return (
//       <div>
//           <input
//               type="checkbox"
//               checked={checked}
//               onChange={() => setChecked(!checked)}
//           />
//           <button onClick={handleButtonClick}>Показать сообщение</button>
//           <p>{message}</p>
//       </div>
//   );
// }

//2
// function App() {
//   const [htmlChecked, setHtmlChecked] = useState(false);
//   const [cssChecked, setCssChecked] = useState(false);
//   const [jsChecked, setJsChecked] = useState(false);

//   return (
//       <div>
//           <label>
//               <input
//                   type="checkbox"
//                   checked={htmlChecked}
//                   onChange={() => setHtmlChecked(!htmlChecked)}
//               />
//               HTML
//           </label>
//           <p>{htmlChecked ? 'Знаю HTML' : 'Не знаю HTML'}</p>

//           <label>
//               <input
//                   type="checkbox"
//                   checked={cssChecked}
//                   onChange={() => setCssChecked(!cssChecked)}
//               />
//               CSS
//           </label>
//           <p>{cssChecked ? 'Знаю CSS' : 'Не знаю CSS'}</p>

//           <label>
//               <input
//                   type="checkbox"
//                   checked={jsChecked}
//                   onChange={() => setJsChecked(!jsChecked)}
//               />
//               JavaScript
//           </label>
//           <p>{jsChecked ? 'Знаю JavaScript' : 'Не знаю JavaScript'}</p>
//       </div>
//   );
// }

//63
//1
// function App() {
// 	const [checked, setChecked] = useState(true);
	
// 	let message;
// 	if (checked) {
// 		message =<div>
//     <h2>Ура, вам уже есть 18</h2>
//     <p>
//       здесь расположен контент только для 
//         взрослых 
//     </p>
//   </div>;
// 	} else {
// 		message = <div>
//     <p>
//       увы, вам еще нет 18 лет:(
//     </p>
//   </div>;
// 	}
	
// 	return <div>
//     <p>Вам есть 18 лет?</p>
// 		<label>
//     <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /> 
// 		</label>
//     <div>{message}</div>
// 	</div>;
// }

//2
// function App() {
//   const[checked, setChecked]=useState(true);
//   	let message;
// 	if (checked) {
// 		message =<div>
//     <h2>lorem</h2>
//   </div>;
// 	} else {
// 		message ='' ;
// 	}
	
// 	return <div>
// 		<label>
//     <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /> 
// 		</label>
//     <div>{message}</div>
// 	</div>;
// }

//64
// function App() {
// 	const [value, setValue] = useState('');
	
// 	function handleChange(event) {
// 		setValue(event.target.value);
// 	}
	
// 	return <div>
// 		<select value={value} onChange={handleChange}>
// 			<option>Москва</option>
// 			<option>Вильнюс</option>
// 			<option>Таллинн</option>
// 			<option>Рига</option>
// 		</select>
// 		<p>
// 			ваш выбор: {value}
// 		</p>
// 	</div>;
// }

//65
// function App() {
// 	const texts = ['Москва', 'Вильнюс', 'Таллинн', 
// 		'Рига']; 
// 	const [value, setValue] = useState('');
	
// 	const options = texts.map((text, index) => {
// 		return <option key={index}>{text}</option>;
// 	});
	
// 	return <div>
// 		<select value={value} onChange={(event) => setValue(event.target.value)}> 
// 			{options}
// 		</select>
// 		<p>
// 			ваш выбор: {value}
// 		</p>
// 	</div>;
// }

//66
// function App() {
// 	const [value, setValue] = useState('');
	
// 	return <div>
// 		<select value={value} onChange={event => setValue(event.target.value)}> 
// 			<option value="1">0-12</option>
// 			<option value="2">13-17</option>
// 			<option value="3">18-25</option>
//       <option value="4">25+</option>
// 		</select>
// 		<p>
		// 	{value === '1' && 'вы выбрали первый пункт'} 
		// 	{value === '2' && 'вы выбрали второй пункт'} 
		// 	{value === '3' && 'вы выбрали третий пункт'} 
    //  {value === '4' && 'вы выбрали четвертый пункт'} 
// 		</p>
// 	</div>;
// }

//67
//1
// function App() {
// 	const [value, setValue] = useState(1);
	
// 	function changeHandler(event) {
// 		setValue(event.target.value);
// 	}
	
// 	return <div>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="1"
// 			checked={value === '1' ? true : false} 
// 			onChange={changeHandler}
// 		/>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="2"
// 			checked={value === '2' ? true 
// 				: false} 
// 			onChange={changeHandler}
// 		/>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="3"
// 			checked={value === '3' ? true 
// 				: false} 
// 			onChange={changeHandler}
// 		/>
//     <p>
//       {value === '1' && 'вы выбрали первый пункт'} 
// 			{value === '2' && 'вы выбрали второй пункт'} 
// 			{value === '3' && 'вы выбрали третий пункт'} 
//     </p>
// 	</div>
// }

//2
// function App() {
//   const [selectedLanguage, setSelectedLanguage] = useState('');

//   function handleLanguageChange(event) {
//       setSelectedLanguage(event.target.value);
//   }

//   return (
//       <div>
//           <label>
//               <input
//                   type="radio"
//                   value="HTML"
//                   checked={selectedLanguage === "HTML"}
//                   onChange={handleLanguageChange}
//               />
//               HTML
//           </label>
//           <br />
//           <label>
//               <input
//                   type="radio"
//                   value="CSS"
//                   checked={selectedLanguage === "CSS"}
//                   onChange={handleLanguageChange}
//               />
//               CSS
//           </label>
//           <br />
//           <label>
//               <input
//                   type="radio"
//                   value="JavaScript"
//                   checked={selectedLanguage === "JavaScript"}
//                   onChange={handleLanguageChange}
//               />
//               JavaScript
//           </label>
//           <br />
//           <p>
//               Выбранный язык программирования: {selectedLanguage}
//               {selectedLanguage === "JavaScript" && ", отличный выбор! Поздравляем!"}
//           </p>
//       </div>
//   );
// }

//69
// function App() {
// 	const [checked, setChecked] = useState(true);
	
// 	return <div>
// 		<input type="checkbox" defaultChecked={checked} 
// 			/> 
// 	</div>;
// }

//70
// function App() {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//   function changeHandler(index, event) {
//       const updatedNumbers = [...numbers];
//       updatedNumbers[index] = parseInt(event.target.value) || 0;
//       setNumbers(updatedNumbers);
//   }

//   const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

//   const inputElements = numbers.map((number, index) => (
//       <input
//           key={index}
//           value={number}
//           onChange={event => changeHandler(index, event)}
//       />
//   ));

//   return (
//       <div>
//           {inputElements}
//           <p>Среднее арифметическое: {average}</p>
//       </div>
//   );
// }

//71
// const initDate = {
//   year: 2025,
//   month: 12,
//   day: 31,
// };

// function App() {
//   const [date, setDate] = useState(initDate);

//   function getDayOfWeek(year, month, day) {
//       const dateObject = new Date(year, month - 1, day);
//       const options = { weekday: 'long' };
//       return new Intl.DateTimeFormat('ru-RU', options).format(dateObject);
//   }

//   return (
//       <div>
//           <p>Год: {date.year}</p>
//           <p>Месяц: {date.month}</p>
//           <p>День: {date.day}</p>
//           <p>День недели: {getDayOfWeek(date.year, date.month, date.day)}</p>
//       </div>
//   );
// }

//Данные
//73
// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//   const [inputValue, setInputValue] = useState('');

//   const handleAddNote = () => {
//       const newNote = inputValue.trim(); 
//       if (newNote !== '') {
//           setNotes([...notes, newNote]);
//           setInputValue('');
//       }
//   };

//   const handleInputChange = (e) => {
//       setInputValue(e.target.value); 
//   };

//   return (
//       <div>
//           <ul>
//               {notes.map((note, index) => (
//                   <li key={index}>{note}</li>
//               ))}
//           </ul>
//           <button onClick={() => handleAddNote()}>Добавить элемент в конец массива</button>
//           <br />
//           <input type="text" value={inputValue} onChange={handleInputChange} />
//           <button onClick={handleAddNote}>Добавить элемент из инпута в конец массива</button>
//       </div>
//   );
// }

//74
// function App() {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
//   const [inputValue, setInputValue] = useState('');

//   const handleSquare = (index) => {
//       const newNumbers = [...numbers];
//       newNumbers[index] = newNumbers[index] ** 2;
//       setNumbers(newNumbers);
//   };

//   const handleDelete = (index) => {
//       const newNumbers = [...numbers];
//       newNumbers.splice(index, 1);
//       setNumbers(newNumbers);
//   };

//   const handleInputClick = (number) => {
//       setInputValue(number);
//   };

//   const handleInputChange = (e) => {
//       setInputValue(e.target.value);
//   };

//   const handleInputBlur = (index) => {
//       const newNumbers = [...numbers];
//       newNumbers[index] = inputValue;
//       setNumbers(newNumbers);
//   };

//   const handleReverse = () => {
//       setNumbers([...numbers].reverse());
//   };

//   return (
//       <div>
//           <ul>
//               {numbers.map((number, index) => (
//                   <li key={index}>
//                       {number}
//                       <button onClick={() => handleSquare(index)}>В квадрат</button>
//                       <button onClick={() => handleDelete(index)}>Удалить</button>
//                       <input
//                           type="text"
//                           value={inputValue}
//                           onClick={() => handleInputClick(number)}
//                           onChange={handleInputChange}
//                           onBlur={() => handleInputBlur(index)}
//                       />
//                   </li>
//               ))}
//           </ul>
//           <button onClick={handleReverse}>Перевернуть порядок</button>
//       </div>
//   );
// }

//75
// const initNotes = [
//   {
//       id: 'GYi9G_uC4gBF1e2SixDvu',
//       prop1: 'value11',
//       prop2: 'value12',
//       prop3: 'value13',
//   },
//   {
//       id: 'IWSpfBPSV3SXgRF87uO74',
//       prop1: 'value21',
//       prop2: 'value22',
//       prop3: 'value23',
//   },
//   {
//       id: 'JAmjRlfQT8rLTm5tG2m1L',
//       prop1: 'value31',
//       prop2: 'value32',
//       prop3: 'value33',
//   },
// ];

// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const [inputValues, setInputValues] = useState({
//       prop1: '',
//       prop2: '',
//       prop3: '',
//   });

//   const handleAddNote = () => {
//       const newNote = {
//           id: Math.random().toString(36).substr(2, 9), 
//           prop1: inputValues.prop1,
//           prop2: inputValues.prop2,
//           prop3: inputValues.prop3,
//       };
//       setNotes([...notes, newNote]);
//       setInputValues({ prop1: '', prop2: '', prop3: '' });
//   };

//   const handleInputChange = (e) => {
//       setInputValues({
//           ...inputValues,
//           [e.target.name]: e.target.value,
//       });
//   };

//   return (
//       <div>
//           <ul>
//               {notes.map((note) => (
//                   <li key={note.id}>
//                       <span>{note.prop1}</span>
//                       <span>{note.prop2}</span>
//                       <span>{note.prop3}</span>
//                   </li>
//               ))}
//           </ul>
//           <input
//               type="text"
//               name="prop1"
//               value={inputValues.prop1}
//               onChange={handleInputChange}
//               placeholder="Введите значение для prop1"
//           />
//           <input
//               type="text"
//               name="prop2"
//               value={inputValues.prop2}
//               onChange={handleInputChange}
//               placeholder="Введите значение для prop2"
//           />
//           <input
//               type="text"
//               name="prop3"
//               value={inputValues.prop3}
//               onChange={handleInputChange}
//               placeholder="Введите значение для prop3"
//           />
//           <button onClick={handleAddNote}>Добавить новый элемент</button>
//       </div>
//   );
// }

//76
// const initNotes = [
//   {
//       id: 'GYi9G_uC4gBF1e2SixDvu',
//       prop1: 'value11',
//       prop2: 'value12',
//       prop3: 'value13',
//   },
//   {
//       id: 'IWSpfBPSV3SXgRF87uO74',
//       prop1: 'value21',
//       prop2: 'value22',
//       prop3: 'value23',
//   },
//   {
//       id: 'JAmjRlfQT8rLTm5tG2m1L',
//       prop1: 'value31',
//       prop2: 'value32',
//       prop3: 'value33',
//   },
// ];

// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const [inputValues, setInputValues] = useState({
//       prop1: '',
//       prop2: '',
//       prop3: '',
//   });

//   const handleDelete = (id) => {
//       setNotes(notes.filter((note) => note.id !== id));
//   };

//   const handleInputChange = (e) => {
//       setInputValues({
//           ...inputValues,
//           [e.target.name]: e.target.value,
//       });
//   };

//   const handleFillInputs = (id) => {
//       const foundNote = notes.find((note) => note.id === id);
//       setInputValues({
//           prop1: foundNote.prop1,
//           prop2: foundNote.prop2,
//           prop3: foundNote.prop3,
//       });
//   };

//   const handleUpdateNote = (id) => {
//       setNotes(
//           notes.map((note) => {
//               if (note.id === id) {
//                   return {
//                       ...note,
//                       prop1: inputValues.prop1,
//                       prop2: inputValues.prop2,
//                       prop3: inputValues.prop3,
//                   };
//               }
//               return note;
//           })
//       );
//   };

//   return (
//       <div>
//           <ul>
//               {notes.map((note) => (
//                   <li key={note.id}>
//                       <span>{note.prop1}</span>
//                       <span>{note.prop2}</span>
//                       <span>{note.prop3}</span>
//                       <button onClick={() => handleDelete(note.id)}>Удалить</button>
//                       <button onClick={() => handleFillInputs(note.id)}>Заполнить инпуты</button>
//                   </li>
//               ))}
//           </ul>
//           <input
//               type="text"
//               name="prop1"
//               value={inputValues.prop1}
//               onChange={handleInputChange}
//               placeholder="Введите значение для prop1"
//           />
//           <input
//               type="text"
//               name="prop2"
//               value={inputValues.prop2}
//               onChange={handleInputChange}
//               placeholder="Введите значение для prop2"
//           />
//           <input
//               type="text"
//               name="prop3"
//               value={inputValues.prop3}
//               onChange={handleInputChange}
//               placeholder="Введите значение для prop3"
//           />
//           <button onClick={() => handleUpdateNote}>Обновить элемент</button>
//       </div>
//   );
// }

//77
const initNotes = [
  {
      id: 1,
      name: 'name1',
      desc: 'long description 1',
      show: false,
  },
  {
      id: 2,
      name: 'name2',
      desc: 'long description 2',
      show: false,
  },
  {
      id: 3,
      name: 'name3',
      desc: 'long description 3',
      show: false,
  },
];

function App() {
  const [notes, setNotes] = useState(initNotes);

  const toggleDescription = (id) => {
      setNotes(
          notes.map((note) =>
              note.id === id ? { ...note, show: !note.show } : note
          )
      );
  };

  return (
      <div>
          {notes.map((note) => (
              <div key={note.id}>
                  <p>
                      {note.name},{' '}
                      <i style={{ display: note.show ? 'block' : 'none' }}>
                          {note.desc}
                      </i>
                  </p>
                  <button onClick={() => toggleDescription(note.id)}>
                      {note.show ? 'Скрыть описание' : 'Показать описание'}
                  </button>
              </div>
          ))}
      </div>
  );
}


export default App;
