export interface ToDo {
  id: number;
  task: string;
  done: boolean;
}

export type GetToDosResponse = ToDo[];

export interface PostToDoRequestBody {
  task: string;
}

export interface PatchToDoParams {
  id: string;
}

type PatchToDoSuccessResponse = ToDo;
type PatchToDoFailureResponse = {
  message: string;
};
export type PatchToDoResponse =
  | PatchToDoSuccessResponse
  | PatchToDoFailureResponse;

export interface DeleteToDoParams {
  id: string;
}
