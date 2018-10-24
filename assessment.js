var surveyJSON = {
 pages: [
  {
   name: "Intro",
   elements: [
    {
     type: "html",
     name: "Faculty Self-Assessment ",
     html: "<p>This self-assessment for online teaching will allow you to evaluate and reflect upon your competencies in key areas of online teaching and provide a baseline of your pedagogical, technical, and administrative skills. As part of your results, you will receive additional guidance/resources for each competency to better prepare you for the online teaching environment.</p>\n<ul>\n<li>There are thirty questions distributed in three categories within the assessment.   All three categories must be completed in full.</li>\n<li>For each question, please select the response that best represents you.</li>\n<li>Once you submit all of your answers, you will be taken to a report of your results for the self-assessment that contains a numerical score and additional feedback.</li>\n</ul>  \n<p>A copy of the report will be emailed to the address you provide when you begin.</p>"
    },
    {
     type: "text",
     name: "Email input",
     title: "Please enter your preferred email address:",
     isRequired: true
    }
   ]
  },
  {
   name: "Questions 1-10",
   elements: [
    {
     type: "radiogroup",
     name: "Question 1",
     title: "I can complete basic computer operations including creating and manipulating documents, managing files and folders, and working with multiple windows.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 2",
     title: "I can log into the Learning Management System (LMS) and access the class.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 3",
     title: "I can navigate the course space in the Learning Management System (LMS) to locate critical class elements such as the syllabus, lessons, gradebook, course mail, or other features.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 4",
     title: "I can set up the class gradebook and manage student grades in the Learning Management Syetem (LMS), such as set a grading scale, use points/percentages, and submit final grades.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 5",
     title: "I can use course communication systems in the Learning Management System (LMS) such as email, chat, web conferencing, discussion forums, or announcements.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 6",
     title: "I can manage the course roster in the Learning Management System (LMS) to set up and manage teams/groups, and add instructors, teaching assistants, or outside guests with appropriate passwords and rights.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 7",
     title: "I can manage student submissions in the Learning Management System (LMS) using tools such as a Dropbox.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 8",
     title: "I can create and manage course files and folders within the Learning Management System (LMS).",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 9",
     title: "I actively participate in the course through a variety of communication tools.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 10",
     title: "I communicate to students when assignments and exams will be graded and returned per assignment/quiz/exam.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    }
   ]
  },
  {
   name: "Questions 11-20",
   elements: [
    {
     type: "radiogroup",
     name: "Question 11",
     title: "I can provide a comprehensive syllabus that adheres to my institution's policies. The syllabus includes a course examination policy, a basis for grades, an academic integrity policy, and a disability access statement.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 12",
     title: "I can mediate course-related student conflicts in accordance with my institution's policies.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 13",
     title: "I can adhere to the institutional policies regarding the Federal Educational Rights & Privacy Act (FERPA).",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 14",
     title: "As needed, I can revise course content and instructional materials based on student feedback.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 15",
     title: "I can obtain technical assistance and support for either myself or my students at the appropriate time.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 16",
     title: "I can communicate my expectations about student behavior in my course (i.e., netiquette).",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 17",
     title: "I can communicate and monitor compliance regarding institutional academic integrity policies.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 18",
     title: "I can securely report grades to students and input final grades into the University's grading system as required.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 19",
     title: "I can notify students through a variety of communication tools when I am unavailable to participate in course-related activities",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 20",
     title: "I can attend to the unique challenges of distance learning where learners are separated by time and geographic proximity, and interactions are primarily asynchronous in nature.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    }
   ]
  },
  {
   name: "Questions 21-30",
   elements: [
    {
     type: "radiogroup",
     name: "Question 21",
     title: "I am familiar with the unique learning needs and situations of both traditional age and adult learners, providing an educational experience that is appropriate for both.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 22",
     title: "I can achieve mastery of the teaching and learning environment by becoming familiar with all course materials, as well as the structure and organization of the course environment.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 23",
     title: "I can respond to student inquiries within 12-24 hours to guide students towards a positive learning outcome.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 24",
     title: "I can provide detailed feedback on assignments and exams through facilitation, guidance, directed learning, and progress assessment.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 25",
     title: "I can communicate as needed with students about course progress and changes via email, course announcements, etc.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 26",
     title: "I can promote and encourage a safe, inviting, and mutually respectful learning environment by communicating with students in a positive tone and by following and promoting Netiquette guidelines.\"",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 27",
     title: "I can continuously monitor and manage student progress by using course statistics or reports to identify students who are not accessing course materials, participating in learning activities, etc., and reach out to encourage engagement.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 28",
     title: "  I can communicate course goals and outcomes using the syllabus and course announcements at the beginning of the course.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 29",
     title: "  I can establish my presence in the course on a regular basis via course announcements, assignments, emails, online office hours, and various other methods.",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Question 30",
     title: "  I can provide a departmental-accepted statement of accessibility in the course syllabus and, throughout the course, demonstrate sensitivity to disabilities and diversities, including aspects of cultural, cognitive, emotional, and physical differences",
     isRequired: true,
     choices: [
      {
       value: "choice 1",
       text: "I have never done this"
      },
      {
       value: "choice 2",
       text: "I had done this and had mixed success"
      },
      {
       value: "choice 3",
       text: "I have done this successfully"
      },
      {
       value: "choice 4",
       text: "I am an expert and can teach others"
      }
     ]
    }
   ]
  }
 ],
 sendResultOnPageNext: true,
 showPageNumbers: true,
 firstPageIsStarted: true
}
function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});