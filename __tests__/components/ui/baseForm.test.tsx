
import BaseForm from '@/components/ui/BaseForm/baseForm';
import { render, screen } from '@testing-library/react';
import { FormData } from '@/types';
import { FaUser, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { ArrayOfSteps } from '@/types';

const testData:FormData[]= [
    {
        inputName: "testName",
        type: "string",
        placeholder: " first name ",
        width: "medium",
    },
    {
        inputName: "lname",
        type: "string",
        placeholder: " last name ",
        width: "medium",
    },
    {
        inputName: "phone",
        type: "string",
        placeholder: " phone number ",
        width: "full",
    },
    {
        inputName: "email",
        type: "email",
        placeholder: " email address ",
        width: "full",
    },
    {
        inputName: "streetAndNum",
        type: "string",
        placeholder: " street name and number ",
        width: "full",
    },
    {
        inputName: "city",
        type: "string",
        placeholder: " city ",
        width: "medium",
    },
    {
        inputName: "country",
        type: "string",
        placeholder: " country ",
        width: "medium",
    },
    {
        inputName: "dateOfBirth",
        type: "date",
        placeholder: "Date of birth",
        width: "full",
    },
    {
        inputName: "profession",
        type: "string",
        placeholder: " profession ",
        width: "full",
    },
    {
        inputName: "summary",
        type: "textarea",
        placeholder: "summary",
        width: "full",
    },
    ];
    
const testSteps:ArrayOfSteps[] = [
        {id:1,icon:<FaUser/>,dataType:'personal',active:true},
        {id:2,icon:<FaGraduationCap/>,dataType:'personal',active:false},
        {id:3,icon:<FaBriefcase/>,dataType:'personal',active:false}
    ];

describe('BaseForm', () => {
  it('renders a section with base-form-section testId tag', () => {
    render(
      <BaseForm buildDataProps={testData} stepsProps={testSteps} currentIndexProps={0}>
        <h1>Personal</h1>
      </BaseForm>
    )
    const baseFormTag = screen.getByTestId('base-form');
    expect(baseFormTag).toBeInTheDocument();
  })
});


describe('BaseForm', () => {
    it('renders a input tag with test data', () => {
      render(
        <BaseForm buildDataProps={testData} stepsProps={testSteps} currentIndexProps={0}>
          <h1>Personal</h1>
        </BaseForm>
      )
      const baseFormTag = screen.getByTestId('base-form');
      expect(baseFormTag.getElementsByTagName('input')[0]?.getAttribute('name')).toBe('testName');
    })
  });

  describe('BaseForm', () => {
    it('renders a heading with test data', () => {
      render(
        <BaseForm buildDataProps={testData} stepsProps={testSteps} currentIndexProps={0}>
        </BaseForm>
      )
      const baseFormHeading = screen.getByRole('heading');
      expect(baseFormHeading.textContent).toBe('personal');
    })
  });
