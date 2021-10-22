import { createContext, useState } from "react";

export const TodoContext = createContext({
    data: [],
    setData: () => { },
});

const initData = [
    {
        "id": 1,
        "name": "Chương 0: Cài đặt ràng buộc",
        "isCompleted": false,
        "deadline": '20/09/2021'
    },
    {
        "id": 2,
        "name": "Chương 1: Tổng quan",
        "isCompleted": false,
        "deadline": '03/10/2021'
    },
    {
        "id": 3,
        "name": "Chương 2: Tổ chức lưu trữ",
        "isCompleted": false,
        "deadline": '15/10/2021'
    },
    {
        "id": 4,
        "name": "Chương 3: Tối ưu truy vấn",
        "isCompleted": true,
        "deadline": '13/10/2021'
    },
    {
        "id": 5,
        "name": "Chương 4: Lập trình với Cursors",
        "isCompleted": true,
        "deadline": '31/10/2021'
    },
    {
        "id": 6,
        "name": "Chương 5: Xử lý truy vấn đồng thời",
        "isCompleted": true,
        "deadline": '11/11/2021'
    }
];

export const TodoContextProvider = ({ children }) => {
    const [myData, setMyData] = useState(initData);
    return (
        <TodoContext.Provider value={{
            data: myData,
            setData: setMyData,
        }}>
            {children}
        </TodoContext.Provider>
    )
};