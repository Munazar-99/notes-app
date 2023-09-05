from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Note
from.serializers import NotesSerializer

# Create your views here.
@api_view(["GET"])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NotesSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getNote(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NotesSerializer(note, many=False)
    print(serializer.data)
    return Response(serializer.data)


@api_view(["POST"])
def addNote(request):
    print(request.data)
    data = request.data
    note = Note.objects.create(
        title=data['title'],
        body=data['body'],
    )
    serializer = NotesSerializer(note, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    print(data)
    note = Note.objects.get(id=pk)
    serializer = NotesSerializer(instance=note, data=data)

    if serializer.is_valid():
        print('validated')
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response(status=204)