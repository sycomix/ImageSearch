import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './search-bar'

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 6b79ac7746043208252776dfa70259f5a9072ce9251eee1e1ab37f79fc6cd45c'
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App
