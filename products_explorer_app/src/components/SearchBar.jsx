function SearchBar({searchTerm, onSearchChange}) {
    
    return(
        <input 
        type="text"
        placeholder="Search Products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}  
        style={{padding: "10px", width:"60%",borderRadius:"8px", marginTop: "20px", marginRight: "15px"}}
        />
    );
}

export default SearchBar;