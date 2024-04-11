import React from 'react'

function Employee({ lastName, firstName, middleName, salary }) {
    return (
        <div>
            <p>
                Фамилия: <span>{lastName = "Иванов"}</span>
            </p>
            <p>
                Имя: <span>{firstName = "Иван"}</span>
            </p>
            <p>
                Отчество: <span>{middleName = "Иванович"}</span>
            </p>
            <p>
                Зарплата: <span>{salary = "100000"}</span>
            </p>
            <br />
            <p>
                Фамилия: <span>{lastName = "Петров"}</span>
            </p>
            <p>
                Имя: <span>{firstName = "Петр"}</span>
            </p>
            <p>
                Отчество: <span>{middleName = "Петрович"}</span>
            </p>
            <p>
                Зарплата: <span>{salary = "100000"}</span>
            </p>
            <br />
            <p>
                Фамилия: <span>{lastName = "Сидорров"}</span>
            </p>
            <p>
                Имя: <span>{firstName = "Сидор"}</span>
            </p>
            <p>
                Отчество: <span>{middleName = "Сидорович"}</span>
            </p>
            <p>
                Зарплата: <span>{salary = "100000"}</span>
            </p>
        </div>
    );
}


export default Employee