import React, { useState, useEffect } from 'react';

import List from './List';
import Alert from './Alert';


const getLocalStorage = () => {
  let list = localStorage.getItem('list');

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};


function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, seteEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });


  const handleSubmit = ( e ) => {
    e.preventDefault();
 
    if (!name) {
      showAlert(true, 'danger', 'por favor, entre com um valor...'); 
    } else if (name && isEditing) {
      setList(
        list.map(( item ) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })

        setName('');
        setEditID(null);
        setIsEditing(false);
        showAlert(true, 'success', 'valor mudado');
      );
    } else {
      showAlert(true, 'success', 'item adicionado na lista');

      let ID = new Date().geTime().toString();
      const newItem = { id: ID, title: name };

      setList(...list, newItem);
      setName('');
    }
  }

  const showAlert = ({ show, type, msg  }) => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'danger', 'lista vazia');

    setList([]);
  };
  const removeItem = ( id ) => {
    showAlert(true, 'danger', 'item removido');

    setList(list.filter(( item ) => item.id !== id));
  };
  const editItem = ( id ) => {
    const specificItem = list.find(( item ) => item.id === id);

    setIsEditing(true);
    setEditID(id);
    setName(specificItem.name);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);


  return (
    <section className="section-center">
      <form 
        className="grocery-form"
        onSubmit={handleSubmit}
      >
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery hoo</h3>

        <div className="form-control">
          <input 
            type="text" 
            placeholder="kit noia"
            value={name}
            onChange={( e ) => setName(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {
        list.length > 0 && (
          <div className="grocery-container">
            <List 
              items={list} 
              removeItem={removeItem} 
              editItem={editItem}
            />

            <button 
              className="clear-btn"
              onClick={clearList}
            >
              Clear Items
            </button>
          </div>  
        )
      }
    </section>
  );
}

export default App;
