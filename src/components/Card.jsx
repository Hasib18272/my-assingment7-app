import React from "react";
import { use } from "react";
import { useState } from "react";
import Box from "./Box";
import IssuesManagement from "../IssuesManagement";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Card = ({ fetchPromise }) => {
  const ticketsData = use(fetchPromise);
  const [tickets,setTickets]= useState(ticketsData)
  const [tasks,setTasks]= useState([])
  const [resolved,setResolved]= useState([])

   const addTask = (ticket) => {
setTasks((prev) => [...prev, ticket]);
setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
toast.success("Added to Task Status!");
};

   const completeTask = (task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    setResolved((prev) => [...prev, task]);
    toast.success(`Task "${task.title}" completed!`);
  };

  return (
    <>
    <Box inProgress={tasks.length} resolved={resolved.length}></Box>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-10 mt-10 mb-10">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
      {tickets.map((t) => (
        <div
          key={t.id}
          onClick={() => addTask(t)}
          className="max-w-sm cursor-pointer hover:scale-[1.02] transition-all rounded-lg shadow-lg bg-white border border-gray-200 p-4"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800 leading-snug">
              {t.title}
            </h3>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 ml-4">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
              {t.status}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {t.description}
          </p>

          <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
            <div className="flex items-center space-x-3">
              <span className="font-medium text-gray-700">{t.id}</span>
              <span
                className={
                  "font-bold uppercase tracking-wider " +
                  (t.priority === "High"
                    ? "text-red-600"
                    : t.priority === "Medium"
                    ? "text-yellow-600"
                    : "text-green-600")
                }
              >
                {t.priority} PRIORITY
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-gray-700">{t.customer}</span>
              <div className="flex items-center space-x-1">
                <span className="text-base">📅</span>
                <span className="text-gray-700">{t.createdAt}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
     
    </div>
     {/* issues mangement */}
      <div className="lg:col-span-1">
        <IssuesManagement tasks={tasks} completeTask={completeTask}></IssuesManagement>
      </div>
    </div>
    <ToastContainer />
  </>
  );
};

export default Card;
