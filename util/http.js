import axios from "axios";

const API_BASE_URL =
  "https://react-native-course-8c12a-default-rtdb.firebaseio.com/";

export async function storeExpense(expenseData) {
  console.log("Store Expense : " + expenseData);
  const response = await axios.post(
    API_BASE_URL + "expenses.json",
    expenseData
  );
  const id = response.data.name;
  console.log("Store Expense 2: " + id + " _ " + response.data);

  return id; //firebase stores the id with name keyword
}

export async function fetchExpenses() {
  const response = await axios.get(API_BASE_URL + "expenses.json");

  const expensesData = [];
  console.log(response.data);

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      description: response.data[key].description,
      date: new Date(response.data[key].date),
    };

    expensesData.push(expenseObj);
  }

  return expensesData;
}

export function updateExpense(id, expenseData) {
  return axios.put(API_BASE_URL + `expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(API_BASE_URL + `expenses/${id}.json`);
}
