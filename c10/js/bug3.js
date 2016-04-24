var $form, $reverseForm, width, height, area, reverseSide, reverseArea, reverseCaculatedSide;
$form = $('#calculator');
$reverseForm = $('#reverse-calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = getInput('width');
  height = getInput('height');
  area = calculateArea(width, height);

  $form.append('<p>' + area + '</p>');
});

$('#reverse-calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  reverseSide = getInput('reverse-side');
  reverseArea = getInput('reverse-area');

  reverseCalculatedSide = calculateSide(reverseArea, reverseSide);

  $reverseForm.append('<p>' + reverseCalculatedSide + '</p>');
});


function calculateArea(width, height) {
  return width * height;
}

function calculateSide(area, side) {
  return area / side;
}

function getInput(id) {
  return $('#' + id).val();
}
