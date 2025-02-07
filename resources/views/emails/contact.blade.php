<!DOCTYPE html>
<html lang="pt-pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo Contato</title>
</head>
<body>
    <h2>Novo contato recebido</h2>
    <p><strong>Nome:</strong> {{ $data['name'] }}</p>
    <p><strong>Contato:</strong> {{ $data['contact'] }}</p>
    <p><strong>Tipo de Evento:</strong> {{ $data['eventType'] }}</p>
    <p><strong>Localização:</strong> {{ $data['location'] }}</p>
    <p><strong>Preferências:</strong> {{ $data['preferences'] }}</p>
    <p><strong>Deseja reunião online?</strong> {{ $data['meeting'] ? 'Sim' : 'Não' }}</p>
</body>
</html>
