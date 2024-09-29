function createTable() {
    const tableOutputColumn = document.getElementById('col1');
    const startContainer = document.getElementsByClassName('fakeTableContainer')[0];  
    const rowCountInput = document.getElementById('rowCount'); 
    const columnCountInput = document.getElementById('columnCount');
    
    const tableOpenSnippet = '<div class="fakeTableContainer"><span>Table</span><div class="fakeTable">';
    const rowOpenSnippet = '<span>Row 1</span><div class="fakeOuterRow"> <div class="fakeRow">';
    const columnSnippet = '<div class="fakeOuterColumn"><span>Column 1</span><div class="fakeColumn"></div></div>';
    const rowCloseSnippet = '</div></div>';
    const tableCloseSnippet = '</div></div>';

    // Clear out fake table.
    startContainer.remove();

    let output = tableOpenSnippet;
     for (let i = 0; i < rowCountInput.value ; i++) { 
        output += rowOpenSnippet;
        for (let j = 0; j < columnCountInput.value ; j++) {
            output += columnSnippet;
        }
        output += rowCloseSnippet;
    }
    output += tableCloseSnippet;

    // Concatenate closing snippet to what you have so far
    tableOutputColumn.innerHTML = output;
}
