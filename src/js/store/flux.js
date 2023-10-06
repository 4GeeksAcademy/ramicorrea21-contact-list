const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts : []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			
			},
			getAllContacts: () =>{
				let URL = "https://playground.4geeks.com/apis/fake/contact/agenda/ramicorrea21"
				fetch(URL)
				.then(res => res.json())
				.then(data => setStore({
					contacts : data
				}))
			},
			handleDelete: async (id) =>{
				let URL_DELETE = `https://playground.4geeks.com/apis/fake/contact/${id}`
				try {
					let response = await fetch(URL_DELETE,{
						method: "DELETE",
						headers:{
							"Content-Type": "application/json"
						}
					})
					if(response.ok){
						getActions().getAllContacts()
					}
				} catch (error) {
					console.log(error);
				}
			},
			postContact : async(newContact) =>{
				try {
					let response = await fetch('https://playground.4geeks.com/apis/fake/contact/',{
						method: "POST",
						headers :{
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newContact)
					})
					if(response.ok){
						getActions().getAllContacts()
					}
				} catch (error) {
					console.log(error);
				}
			},
			putEditedContact : async(id, editContact) =>{
			let URL_EDIT = `https://playground.4geeks.com/apis/fake/contact/${id}`
			try {
				let response = fetch(URL_EDIT, {
					method: "PUT",
					headers:{
						"Content-Type": "application/json"
					},
					body: JSON.stringify(editContact)
				})
				if(response.ok){
					getActions().getAllContacts()
				}
			} catch (error) {
				
			}
			}
		}
	};
};

export default getState;
