var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = getInput('width');
  height = getInput('height');
  area = calculateArea(width, height);

  if (area < 100) {
    debugger;             // A breakpoint is set if the developer tools are open
  }

  $form.append('<p>' + area + '</p>');
});

function calculateArea(width, height) {
  return width * height;
}

function getInput(id) {
  return $('#' + id).val();
}
