interface SearchProps {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}


function Search({ search, setSearch }: SearchProps){

    return (
        <div className="search">
            <h2>Pesquisar</h2>
            <input 
            type="text" 
            placeholder="Pesquisar" 
            value={search} 
            onChange={(event) => setSearch(event.target.value)} />
        </div>
    )

}

export default Search