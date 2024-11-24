
export interface IChatContextType {
  createQuestion: (id: string, question: string, callback?) => void;
  getHistoryChat: (id: string, callback?) => Promise;
  questionValue: string;
  setQuestionValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}