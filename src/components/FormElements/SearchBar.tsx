import Select from "react-select";
import { subjectOptions } from "../../utils/data";
import { searchBarStyles, searchBarTheme } from "../../utils/customStyles";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [subjectSelected, setSubjectSelected] = useState<string | null>(null);
  const navigate = useNavigate();
  const selectHandler = (event: { value: string; label: string } | null) => {
    if (event?.value) {
      setSubjectSelected(event.value);
    } else {
      setSubjectSelected(null);
    }
  };

  const searchHandler = () => {
    if (subjectSelected !== "all") {
      return navigate(`/casovi?predmet=${subjectSelected}`);
    } else {
      return navigate("/casovi");
    }
  };
  return (
    <div className="search-form">
      <h6>
        Unesite predmet za koji tražite privatne časove i pronađite idealnog
        predavača.
      </h6>
      <div className="search-bar">
        <Select
          theme={searchBarTheme}
          styles={searchBarStyles}
          placeholder="Odaberi predmet"
          isClearable
          isSearchable
          className="select"
          options={subjectOptions}
          onChange={selectHandler}
        />
        <Button onClick={searchHandler} disabled={!subjectSelected}>
          <i className="uil uil-search"></i> Pretraži
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
