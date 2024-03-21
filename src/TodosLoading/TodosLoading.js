import React from "react";
import { TbClockSearch } from "react-icons/tb";
import "./TodosLoading.css";

function TodosLoading() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text"><TbClockSearch />
</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    )
}

export { TodosLoading };