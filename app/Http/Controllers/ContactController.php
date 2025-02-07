<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'contact' => 'required|string|max:255',
            'eventType' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'preferences' => 'nullable|string',
            'meeting' => 'boolean',
            'file' => 'nullable|file|mimes:pdf,jpg,png|max:2048', // Aceita PDF, JPG, PNG com 2MB máx.
        ]);

        // Se houver um arquivo, armazenamos mantendo o nome original
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME); // Nome sem extensão
            $extension = $file->getClientOriginalExtension(); // Extensão do arquivo

            // Garantir nome único sem modificá-lo demais
            $fileName = $originalName . '_' . time() . '.' . $extension;

            // Salvar no storage mantendo o nome personalizado
            $path = $file->storeAs('attachments', $fileName, 'public');
            $validatedData['file_path'] = $path;
        }

        // Enviar e-mail com anexo
        Mail::to('seuemail@dominio.com')->send(new ContactMail($validatedData));

        return redirect()->back()->with(['message' => 'E-mail enviado com sucesso!']);
    }
}
