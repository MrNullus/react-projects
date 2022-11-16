import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {
        items.map(({ id, title }) => (
          <article className="grocery-item" key={id}>
            <p className="title">
              {tile}
            </p>
            
            <div className="btn-container">
              <button 
                className="edit-btn" 
                type="button"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>

              <button 
                className="delete-btn" 
                type="button"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        ));
      }
    </div>
  );
}

export default List;
