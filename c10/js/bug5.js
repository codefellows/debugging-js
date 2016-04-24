var $form, $reverseForm, width, height, area, reverseSide, reverseArea, reverseCaculatedSide;
$form = $('#calculator');
$reverseForm = $('#reverse-calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');
  $form.find('p.result').remove();
  $form.find('p.error').remove();

  width = getInput('width');
  height = getInput('height');
  area = calculateArea(width, height);

  $form.append('<p class="result">' + area + '</p>');
});

$('#reverse-calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');
  $reverseForm.find('p.result').remove();
  $reverseForm.find('p.error').remove();

  reverseSide = getInput('reverse-side');
  reverseArea = getInput('reverse-area');

  if (reverseSide <= 0 || reverseArea <= 0) {
    showError($reverseForm, 'Please enter positive, non-zero values.');
  } else if (reverseArea < reverseSide) {
    showError($reverseForm, 'That\'s a weird wall! The area should be larger than the side.');
  } else {
    reverseCalculatedSide = calculateSide(reverseArea, reverseSide);
    $reverseForm.append('<p class="result">' + reverseCalculatedSide + '</p>');
  }

});

function calculateArea(width, height) {
  return width * height;
}

function calculateSide(area, side) {
  return side / area;
}

function getInput(id) {
  return $('#' + id).val();
}

function showError($formObj, text) {
  $formObj.prepend('<p class="error">' + text + '</p>');
}
