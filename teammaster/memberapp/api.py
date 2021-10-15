from memberapp.models import Member
from rest_framework import viewsets,permissions
from .serializers import MemberSerializer

#Lead Viewset
class MemberViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class=MemberSerializer

    def get_queryset(self):
        return self.request.user.memberarray.all()

    def perform_create(self, serializers):
        serializers.save(owner=self.request.user)