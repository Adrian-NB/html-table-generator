let LAST_CLICKED_COLUMN;
let TABLE_DATA = [['']];

function columnClickHandler(event) {
    LAST_CLICKED_COLUMN = event.srcElement;
    const tableCreatorMenu = document.getElementsByClassName("tableCreatorMenu")[0];
    const columnEditorMenu = document.getElementsByClassName("columnEditorMenu")[0];
    tableCreatorMenu.style.display = 'none';
    columnEditorMenu.style.display = 'block';

    // clear out textarea
    const idIndexArray = LAST_CLICKED_COLUMN.id.split('-');
    const rowIndex = idIndexArray[0];
    const columnIndex = idIndexArray[1];
    document.getElementById("columnEditor").value = TABLE_DATA[rowIndex][columnIndex];
}

function storeColumnData() {
    // read from textarea
    const columnEditorData = document.getElementById("columnEditor").value;
    // insert into LAST_CLICKED_COLUMN
    const idIndexArray = LAST_CLICKED_COLUMN.id.split('-');
    const rowIndex = idIndexArray[0];
    const columnIndex = idIndexArray[1];
    LAST_CLICKED_COLUMN.innerHTML = columnEditorData;
    // need to make it to whatever column we click, figure out what index it would be in table_data
    TABLE_DATA[rowIndex][columnIndex] = columnEditorData;
}

function setColumnClickHandler() {
    Array.from(document.getElementsByClassName("fakeColumn")).forEach(fakeColumn => {
        fakeColumn.addEventListener("click", (event) => columnClickHandler(event));
    });
}

function createTable() {
    const tableOutputColumn = document.getElementById('col1');
    const startContainer = document.getElementsByClassName('fakeTableContainer')[0];  
    const rowCountInput = document.getElementById('rowCount'); 
    const columnCountInput = document.getElementById('columnCount');
    
    const tableOpenSnippet = '<div class="fakeTableContainer"><span>Table</span><div class="fakeTable">';
    const rowOpenSnippet = '<span>Row 1</span><div class="fakeOuterRow"> <div class="fakeRow">';
    const rowCloseSnippet = '</div></div>';
    const tableCloseSnippet = '</div></div>';

    // Clear out fake table.
    startContainer.remove();

    let output = tableOpenSnippet;
    TABLE_DATA = [];
     for (let i = 0; i < rowCountInput.value ; i++) { 
        let rowArray = [];
        output += rowOpenSnippet;
        for (let j = 0; j < columnCountInput.value ; j++) {
            let columnSnippet = `<div class="fakeOuterColumn"><span>Column 1</span><div class="fakeColumn" id="${i}-${j}"></div></div>`;
            let columnPlaceholder = '';
            rowArray.push(columnPlaceholder);
            output += columnSnippet;
        }
        TABLE_DATA.push(rowArray);
        output += rowCloseSnippet;
    }
    output += tableCloseSnippet;

    // Concatenate closing snippet to what you have so far
    tableOutputColumn.innerHTML = output;

    setColumnClickHandler();
}

// Set up handlers for initial table.
setColumnClickHandler();