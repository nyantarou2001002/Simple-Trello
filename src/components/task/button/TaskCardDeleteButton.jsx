import React from 'react'

const TaskCardDeleteButton = ({
  taskCardsList, 
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    /*タスクカードを削除する*/
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button className='taskCardDeleteButton' 
      onClick={() => {
      if (taskCard && taskCard.id){
        taskCardDeleteButton(taskCard.id);
      }else{
        console.error('taskCardが未定義、またはIDが存在しません')
      }
      }}>
      <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
