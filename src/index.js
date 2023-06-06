/* eslint-disable no-use-before-define */
const questionContainer = document.getElementById('question');
const nextQuestionButton = document.getElementById('next-question');
const interviewQuestions = [
  {
    question: 'Why do you want to work for the company?',
  },
  {
    question: 'Why do you want to leave your current/last company?',
  },
  {
    question: 'What are you looking for in your next role?',
  },
  {
    question: 'Tell me about a time when you had a conflict with a co-worker.',
  },
  {
    question:
      'Tell me about a time in which you had a conflict and needed to influence somebody else.',
  },
  {
    question: 'What project are you currently working on?',
  },
  {
    question: 'What is the most challenging aspect of your current project?',
  },
  {
    question:
      'What was the most difficult bug that you fixed in the past 6 months?',
  },
  {
    question:
      'How do you tackle challenges? Name a difficult challenge you faced while working on a project, how you overcame it, and what you learned.',
  },
  {
    question: 'What are you excited about?',
  },
  {
    question: 'What frustrates you?',
  },
  {
    question:
      'Imagine it is your first day here at the company. What do you want to work on? What features would you improve on?',
  },
  {
    question:
      "What are the most interesting projects you have worked on and how might they be relevant to this company's environment?",
  },
  {
    question: 'Tell me about a time you had a disagreement with your manager.',
  },
  {
    question:
      'Talk about a project you are most passionate about, or one where you did your best work.',
  },
  {
    question: 'What does your best day of work look like?',
  },
  {
    question:
      'What is something that you had to push for in your previous projects?',
  },
  {
    question:
      'What is the most constructive feedback you have received in your career?',
  },
  {
    question: 'What is something you had to persevere at for multiple months?',
  },
  {
    question: 'Tell me about a time you met a tight deadline.',
  },
  {
    question:
      'If this were your first annual review with our company, what would I be telling you right now?',
  },
  {
    question:
      "Time management has become a necessary factor in productivity. Give an example of a time-management skill you've learned and applied at work.",
  },
  {
    question:
      "Tell me about a problem you've had getting along with a work associate.",
  },
  {
    question: 'What aspects of your work are most often criticized?',
  },
  {
    question: 'How have you handled criticism of your work?',
  },
  {
    question:
      'What strengths do you think are most important for your job position?',
  },
  {
    question: 'What words would your colleagues use to describe you?',
  },
  {
    question:
      'What would you hope to achieve in the first six months after being hired?',
  },
  {
    question: 'Tell me why you will be a good fit for the position.',
  },
];

questionContainer.textContent = 'Click "Next Question" to start the interview';

function standby() {
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((stream) => {
      videoElement.srcObject = stream;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Error accessing media devices:', error);
    });
}

standby();

function nextQuestion() {
  if (interviewQuestions.length === 0) {
    questionContainer.textContent = 'Finished all questions';
    return;
  }

  const randomIndex = Math.floor(Math.random() * interviewQuestions.length);
  const { question } = interviewQuestions[randomIndex];

  interviewQuestions.splice(randomIndex, 1);

  questionContainer.textContent = question;
  readQuestionAloud();
}

const videoElement = document.getElementById('video');
const startRecordingButton = document.getElementById('start-recording');
const stopRecordingButton = document.getElementById('stop-recording');
let mediaRecorder;
let recordedChunks = [];

startRecordingButton.addEventListener('click', startRecording);
stopRecordingButton.addEventListener('click', stopRecording);

function handleDataAvailable(event) {
  recordedChunks.push(event.data);
}

const questionElement = document.getElementById('question');

function readQuestionAloud() {
  const questionText = questionElement.textContent;
  const speech = new SpeechSynthesisUtterance(questionText);
  speechSynthesis.speak(speech);
}

let isRecording = false;

function startRecording() {
  if (!isRecording) {
    isRecording = true;
    recordedChunks = [];

    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        const combinedStream = new MediaStream([
          ...stream.getAudioTracks(),
          ...stream.getVideoTracks(),
        ]);
        videoElement.srcObject = stream;
        mediaRecorder = new MediaRecorder(combinedStream);
        mediaRecorder.addEventListener('dataavailable', handleDataAvailable);
        mediaRecorder.start();
        toggleButtonStates();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error accessing media devices:', error);
      });
  }
}

function stopRecording() {
  if (isRecording && mediaRecorder && mediaRecorder.state !== 'inactive') {
    isRecording = false;
    mediaRecorder.stop();
    toggleButtonStates();
    setTimeout(() => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      videoElement.src = url;
      videoElement.srcObject = null;
    }, 1000);
  }
}

function toggleButtonStates() {
  startRecordingButton.classList.toggle('disabled');
  stopRecordingButton.classList.toggle('disabled');
  stopRecordingButton.ariaDisabled = !stopRecordingButton.ariaDisabled;
  // nextQuestionButton.classList.toggle('disabled');
}

nextQuestionButton.addEventListener('click', () => {
  nextQuestion();
});
