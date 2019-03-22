import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    state = { images: [] };
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 20f405a164174adb46c4ba0ee739deb546996b5eacb1c2503211e12260449bed'
            }
        });
        console.log(response.data.results);
    
}

    
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }

};

export default App;
