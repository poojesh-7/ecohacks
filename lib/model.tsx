export type userModel={
  user:{
    _id:string,
    createdAt:string,
    email:string,
    ecoPoints:number,
    username:string,
  },
  postedHacks:HackModel[]
}

export type HackModel = {
  slug:string,
  title: string,
  description: string,
  image: string,
  steps: string[],
  username: string,
  email: string,
  likes: number,
  dislikes: number,
  trending: boolean,
  postedOn: string,
  tutorialLink:string,
};
