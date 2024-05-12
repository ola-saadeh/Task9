document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeShapeColor').addEventListener('click', function() {
        var selectedShape = document.getElementById('shapeSelect').value;
        var selectedColor = document.getElementById('colorSelect').value;
        var shapeElement = document.getElementById('shape');

        shapeElement.style.borderRadius = '';
        shapeElement.style.width = '';
        shapeElement.style.height = '';
        shapeElement.style.borderLeft = '';
        shapeElement.style.borderRight = '';
        shapeElement.style.borderBottom = '';
        shapeElement.style.backgroundColor = '';

        if (selectedShape === 'circle') {
            shapeElement.style.borderRadius = '50%';
            shapeElement.style.width = '100px';
            shapeElement.style.height = '100px';
            shapeElement.style.backgroundColor = selectedColor;
        } else if (selectedShape === 'square') {
            shapeElement.style.borderRadius = '0';
            shapeElement.style.width = '100px';
            shapeElement.style.height = '100px';
            shapeElement.style.backgroundColor = selectedColor;
        } else if (selectedShape === 'triangle') {
            shapeElement.style.width = '0';
            shapeElement.style.borderRadius = '0';
            shapeElement.style.height = '0';
            shapeElement.style.borderLeft = '50px solid transparent';
            shapeElement.style.borderRight = '50px solid transparent';
            shapeElement.style.borderBottom = '100px solid ' + selectedColor;
            shapeElement.style.backgroundColor = 'transparent';
        } else if (selectedShape === 'oval') {
            shapeElement.style.borderRadius = '50%';
            shapeElement.style.width = '120px';
            shapeElement.style.height = '80px';
            shapeElement.style.backgroundColor = selectedColor;
        }

        changeShapeText();
    });
});

function changeShapeText() {
    var selectedShape = document.getElementById('shapeSelect').value;
    var shapeText = document.getElementById('shapeText');

    if (selectedShape === "circle") {
        shapeText.textContent = "circle selected";
    } else if (selectedShape === "square") {
        shapeText.textContent = "square selected";
    } else if (selectedShape === "triangle") {
        shapeText.textContent = "triangle selected";
    } else if (selectedShape === "oval") {
        shapeText.textContent = "oval selected";
    }
}
