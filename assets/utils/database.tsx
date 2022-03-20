import firestore, { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
export const createQuiz = (currentQuizId: string | undefined, title: any, description: any, attemps: number) => {
  return firestore().collection("Quizzes").doc(currentQuizId).set({
    title,
    description,
    attemps,
  });
};

// Create new question for current quiz
export const createQuestion = (
  currentQuizId: string | undefined,
  currentQuestionId: string | undefined,
  question: FirebaseFirestoreTypes.DocumentData
) => {
  return firestore().collection("Quizzes").doc(currentQuizId).collection("QNA").doc(currentQuestionId).set(question);
};

// Get All Quizzes
export const getQuizzes = () => {
  return firestore().collection("Quizzes").get();
};

// Get Quiz Details by id
export const getQuizById = (currentQuizId: string | undefined) => {
  return firestore().collection("Quizzes").doc(currentQuizId).get();
};

// Get Questions by currentQuizId
export const getQuestionsByQuizId = (currentQuizId: string | undefined) => {
  return firestore().collection("Quizzes").doc(currentQuizId).collection("QNA").get();
};
