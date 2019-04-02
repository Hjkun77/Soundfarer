const Index = document.querySelector('#index')
const Progress = document.querySelector('#progress')
const UserName = document.getElementById("username")

function toggleProgress() {
  const InputValue = document.getElementById("name").value;
  if (InputValue === "") {
    UserName.innerHTML = "User"
    alert('Please input display name')
  } else {
    UserName.innerHTML = InputValue
    // window.location.href = "/journey.html"
    Index.classList.replace('block', 'none')
    Progress.classList.replace('none', 'block')
    document.getElementById('tracker').scrollIntoView()
    var J5Button = document.getElementById('j-5b');
    setTimeout(function () {
      $('#pageload').modal('show');
    }, 500)
  }

}

const Circle1 = document.querySelector('#circle1');
const Circle2 = document.querySelector('#circle2');
const Circle3 = document.querySelector('#circle3');
const Circle4 = document.querySelector('#circle4');
const Circle5 = document.querySelector('#circle5');
const Circle6 = document.querySelector('#circle6');
const Circle7 = document.querySelector('#circle7');
const Circle8 = document.querySelector('#circle8');

const Button2 = document.querySelector('#task2-button');
const Button3 = document.querySelector('#task3-button');
const Button4 = document.querySelector('#task4-button');
const Button5 = document.querySelector('#task5-button');
const Button6 = document.querySelector('#task6-button');
const Button7 = document.querySelector('#task7-button');
const Button8 = document.querySelector('#task8-button');

function toggleTask1() {
  Button2.disabled = true;
  Circle1.classList.replace('check', 'current')
  Circle2.classList.replace('current', 'question')
}

function toggleTask2() {
  Button2.disabled = false;
  Circle1.classList.replace('current', 'check');
  Circle2.classList.replace('question', 'current')

  Button3.disabled = true;
  Circle2.classList.replace('check', 'current')
  Circle3.classList.replace('current', 'question')
}

function toggleTask3() {
  Button3.disabled = false;
  Circle2.classList.replace('current', 'check');
  Circle3.classList.replace('question', 'current')

  Button4.disabled = true;
  Circle3.classList.replace('check', 'current')
  Circle4.classList.replace('current', 'question')
}

function toggleTask4() {
  Button4.disabled = false;
  Circle3.classList.replace('current', 'check');
  Circle4.classList.replace('question', 'current')

  Button5.disabled = true;
  Circle4.classList.replace('check', 'current')
  Circle5.classList.replace('current', 'question')
}

function toggleTask5() {
  Button5.disabled = false;
  Circle4.classList.replace('current', 'check');
  Circle5.classList.replace('question', 'current')

  Button6.disabled = true;
  Circle5.classList.replace('check', 'current')
  Circle6.classList.replace('current', 'question')
}

function toggleTask6() {
  Button6.disabled = false;
  Circle5.classList.replace('current', 'check');
  Circle6.classList.replace('question', 'current')

  Button7.disabled = true;
  Circle6.classList.replace('check', 'current')
  Circle7.classList.replace('current', 'question')
}

function toggleTask7() {
  Button7.disabled = false;
  Circle6.classList.replace('current', 'check');
  Circle7.classList.replace('question', 'current')

  Button8.disabled = true;
  Circle7.classList.replace('check', 'current')
  Circle8.classList.replace('current', 'question')
}

function toggleTask8() {
  Button8.disabled = false;
  Circle7.classList.replace('current', 'check');
  Circle8.classList.replace('question', 'current')
}

const RecordLabel = document.querySelector('#recordlabel')
const RecordLabelImg = document.querySelector('#recordlabelimg');
const Label1Image = document.querySelector('#label1-image');
const Label2Image = document.querySelector('#label2-image');
const Label3Image = document.querySelector('#label3-image');
const Label4Image = document.querySelector('#label4-image');
const Label5Image = document.querySelector('#label5-image');
const Label6Image = document.querySelector('#label6-image');

function toggleLabel1() {
  RecordLabel.classList.replace('recordlabel', 'none')
  RecordLabelImg.classList.replace('none', 'recordlabelimg')
  Label1Image.classList.remove('none')
  Label2Image.classList.add('none')
  Label3Image.classList.add('none')
  Label4Image.classList.add('none')
  Label5Image.classList.add('none')
  Label6Image.classList.add('none')
}

function toggleLabel2() {
  RecordLabel.classList.replace('recordlabel', 'none')
  RecordLabelImg.classList.replace('none', 'recordlabelimg')
  Label2Image.classList.remove('none')
  Label1Image.classList.add('none')
  Label3Image.classList.add('none')
  Label4Image.classList.add('none')
  Label5Image.classList.add('none')
  Label6Image.classList.add('none')
}

function toggleLabel3() {
  RecordLabel.classList.replace('recordlabel', 'none')
  RecordLabelImg.classList.replace('none', 'recordlabelimg')
  Label3Image.classList.remove('none')
  Label2Image.classList.add('none')
  Label1Image.classList.add('none')
  Label4Image.classList.add('none')
  Label5Image.classList.add('none')
  Label6Image.classList.add('none')
}

function toggleLabel4() {
  RecordLabel.classList.replace('recordlabel', 'none')
  RecordLabelImg.classList.replace('none', 'recordlabelimg')
  Label4Image.classList.remove('none')
  Label2Image.classList.add('none')
  Label3Image.classList.add('none')
  Label1Image.classList.add('none')
  Label5Image.classList.add('none')
  Label6Image.classList.add('none')
}

function toggleLabel5() {
  RecordLabel.classList.replace('recordlabel', 'none')
  RecordLabelImg.classList.replace('none', 'recordlabelimg')
  Label5Image.classList.remove('none')
  Label2Image.classList.add('none')
  Label3Image.classList.add('none')
  Label4Image.classList.add('none')
  Label1Image.classList.add('none')
  Label6Image.classList.add('none')
}

function toggleLabel6() {
  RecordLabel.classList.replace('recordlabel', 'none')
  RecordLabelImg.classList.replace('none', 'recordlabelimg')
  Label6Image.classList.remove('none')
  Label2Image.classList.add('none')
  Label3Image.classList.add('none')
  Label4Image.classList.add('none')
  Label5Image.classList.add('none')
  Label1Image.classList.add('none')
}

function toggleRecordLabel() {
  RecordLabel.classList.replace('none', 'recordlabel');
  RecordLabelImg.classList.replace('recordlabelimg', 'none')
}

const GigLocation = document.querySelector('#giglocation')
const GigLocationImg = document.querySelector('#giglocationimg');
const Gig1Image = document.querySelector('#gig1-image');
const Gig2Image = document.querySelector('#gig2-image');
const Gig3Image = document.querySelector('#gig3-image');
const Gig4Image = document.querySelector('#gig4-image');
const Gig5Image = document.querySelector('#gig5-image');
const Gig6Image = document.querySelector('#gig6-image');

function toggleGigLocation() {
  GigLocation.classList.replace('none', 'giglocation');
  GigLocationImg.classList.replace('giglocationimg', 'none')
}

function toggleGig1() {
  GigLocation.classList.replace('giglocation', 'none')
  GigLocationImg.classList.replace('none', 'giglocationimg')
  Gig1Image.classList.remove('none')
  Gig2Image.classList.add('none')
  Gig3Image.classList.add('none')
  Gig4Image.classList.add('none')
  Gig5Image.classList.add('none')
  Gig6Image.classList.add('none')

}

function toggleGig2() {
  GigLocation.classList.replace('giglocation', 'none')
  GigLocationImg.classList.replace('none', 'giglocationimg')
  Gig2Image.classList.remove('none')
  Gig1Image.classList.add('none')
  Gig3Image.classList.add('none')
  Gig4Image.classList.add('none')
  Gig5Image.classList.add('none')
  Gig6Image.classList.add('none')

}


function toggleGig3() {
  GigLocation.classList.replace('giglocation', 'none')
  GigLocationImg.classList.replace('none', 'giglocationimg')
  Gig3Image.classList.remove('none')
  Gig2Image.classList.add('none')
  Gig1Image.classList.add('none')
  Gig4Image.classList.add('none')
  Gig5Image.classList.add('none')
  Gig6Image.classList.add('none')

}


function toggleGig4() {
  GigLocation.classList.replace('giglocation', 'none')
  GigLocationImg.classList.replace('none', 'giglocationimg')
  Gig4Image.classList.remove('none')
  Gig2Image.classList.add('none')
  Gig3Image.classList.add('none')
  Gig1Image.classList.add('none')
  Gig5Image.classList.add('none')
  Gig6Image.classList.add('none')

}


function toggleGig5() {
  GigLocation.classList.replace('giglocation', 'none')
  GigLocationImg.classList.replace('none', 'giglocationimg')
  Gig5Image.classList.remove('none')
  Gig2Image.classList.add('none')
  Gig3Image.classList.add('none')
  Gig4Image.classList.add('none')
  Gig1Image.classList.add('none')
  Gig6Image.classList.add('none')

}


function toggleGig6() {
  GigLocation.classList.replace('giglocation', 'none')
  GigLocationImg.classList.replace('none', 'giglocationimg')
  Gig6Image.classList.remove('none')
  Gig2Image.classList.add('none')
  Gig3Image.classList.add('none')
  Gig4Image.classList.add('none')
  Gig5Image.classList.add('none')
  Gig1Image.classList.add('none')

}
