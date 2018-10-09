from sqlalchemy.inspection import inspect

class Serializer(object):

    def serialize(self):
        return {c: getattr(self, c) for c in inspect(self).attrs.keys()}

    @staticmethod
    def serialize_list(l):
        return [m.serialize() for m in l]

    def filteredObject(self, arrayList):
        [setattr(self, item, arrayList[item]) for item in arrayList.keys() if item in inspect(self).attrs.keys()]
        return self