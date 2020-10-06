import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";


class SearchPanel extends React.Component {

    render() {
        return (
            <div>
                <TextField
                        id="outlined-full-width"
                        fullWidth
                        placeholder="search"
                        margin="dense"
                        variant="outlined"
                        style={{margin: 20, position: "sticky", top: 0}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                <div style={{color:"gray", marginTop: 200, marginLeft: 100}}>
                    <b>No Updates Added Yet</b>
                </div>
            </div>
        )
    }
}

export default SearchPanel;