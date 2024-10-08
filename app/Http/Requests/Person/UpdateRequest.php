<?php

namespace App\Http\Requests\Person;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'age' => 'required|integer',
            'weight' => 'required|integer',
        ];
    }

    public function messages() {
        return [
            /*'name.required' => 'This item is required',
            'name.string' => 'This item must be string type',
            'age.required' => 'This item is required',
            'age.integer' => 'This item must be integer type',
            'weight.required' => 'This item is required',
            'weight.integer' => 'This item must be integer type',*/
        ];
    }
}
