
export interface IChatContextType {
  createQuestion: (question: string, callback?) => void;
  questionValue: string;
  setQuestionValue: React.Dispatch<React.SetStateAction<string>>;
}