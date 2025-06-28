"use client";
import Input from "@/ui/Input";
import TitleCover from "@/ui/TitleCover";
import { ChangeEvent, FormEvent, Suspense, useRef, useState, useTransition } from "react";
import { useActionState } from "react";
import {useFormStatus} from "react-dom"
import ImageInput from "@/ui/ImageInput";
import "@/ui/Button.css"
import Button from "@/ui/Button";
import { PostHack } from "@/lib/formAction";
import Loader from "@/ui/Loader";
const HackForm = () => {
  const {pending}=useFormStatus()
  const [, startTransition] = useTransition()
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [tutorialLink, setTutorialLink] = useState("");
  const [steps, setSteps] = useState([""]);
  const [state, formAction] = useActionState<{message:string}, FormData>(PostHack, { message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  console.log(state.message)
  const handleChange = (index: number, value: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (title.trim().split(" ").length < 4) {
      newErrors.title = "Title must be at least 4 words.";
    }

    if (description.trim().length < 500) {
      newErrors.description = "Description must be at least 500 characters.";
    }

    if (!image) {
      newErrors.image = "Please provide an image.";
    } else if (imageError) {
      newErrors.image = imageError;
    }
    if(steps.length<3){
      newErrors.steps = "minimum 3 Steps";
    }
    
    steps.forEach((step, i) => {
      if (step.trim().split(" ").length < 5) {
        newErrors[`step${i}`] = `Step ${i + 1} must be at least 5 words.`;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const formRef = useRef<HTMLFormElement>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      startTransition(() => {
        formAction(formData);
      });
    }
  };

  return (
    <Suspense fallback={<Loader />}>
    <section>
      <TitleCover text="Create Your Hack" />
      <form ref={formRef}  onSubmit={submitHandler} className="hack_form">
        <Input
          el="input"
          type="text"
          label="Title"
          name='title'
          value={title}
          clickEvent={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
        <ImageInput
          label="Image"
          name='image'
          value={image}
          onChange={(val) => setImage(val)}
          error={errors.image}
          setError={setImageError}
          />

        <Input
          el="textarea"
          type="text"
          label="Description"
          name='description'
          value={description}
          clickEvent={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          />
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description}</p>
        )}

        <h1>Steps</h1>
        <button type="button" className="add_step" onClick={addStep}>
          Add  ➕ 
        </button>
        {steps.map((step, index) => (
          <div key={index}>
            <div className="shrink_input2">
              <Input
                label={`Step ${index + 1}`}
                el="input"
                type="text"
                name='steps'
                value={step}
                clickEvent={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, e.target.value)
                }
              />
            </div>
            {errors[`step${index}`] && (
              <p style={{ color: "red" }}>{errors[`step${index}`]}</p>
            )}
            {steps.length > 1 && (
              <button type="button" className="remove_step" onClick={() => removeStep(index)}>
                Remove ❌
              </button>
            )}
          </div>
        ))}
        {errors.steps && (
          <p style={{ color: "red" }}>{errors.steps}</p>
        )}

        <div className="shrink_input">
          <Input
            el="input"
            type="text"
            label="Tutorial link (optional)"
            name='tutorial'
            value={tutorialLink}
            clickEvent={(e: ChangeEvent<HTMLInputElement>) =>
              setTutorialLink(e.target.value)
            }
          />
        </div>

        <Button classType="form_submit_btn" text={`${pending?"Submitting":"Submit"}`}></Button>
        {state.message && <p>{state.message}</p>}
      </form>
    </section>
    </Suspense>
  );
};

export default HackForm;
